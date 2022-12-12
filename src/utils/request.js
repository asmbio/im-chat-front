import axios from 'axios'
import {
    Message,
    MessageBox
} from 'element-ui'
import {
    removeAuth
} from '@/utils/auth'
import qs from 'qs'
import { debounce } from 'throttle-debounce'
import Lockr from 'lockr'

/**
 * 检查dom是否忽略
 * @param {*} e
 */
const clearCacheEnterLogin = debounce(500, () => {
    removeAuth().then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
    }).catch(() => {
        location.reload()
    })

})



const errorMessage = debounce(500, (message, type = 'error') => {
    Message({
        message: message,
        duration: 1500,
        type: type
    })
})

const confirmMessage = debounce(1000, (message) => {
    MessageBox.confirm(message, '提示', {
        confirmButtonText: '确定',
        showCancelButton: false,
        type: 'warning'
    }).then(() => {
        clearCacheEnterLogin()
    }).catch(() => {})
})

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'

//axios.defaults.headers['Access-Control-Allow-Origin']='*'
    // 创建axios实例     headers: {'Content-Type': 'application/json'}
// let hrefs = []
// if (window.location.href.indexOf('index.html') != -1) {
//     hrefs = window.location.href.split('index.html')
// } else {
//     hrefs = window.location.href.split('#')
// }
// const baseURL = hrefs.length > 0 ? hrefs[0] : window.location.href
    // baseURL + 'index.php/' 默认请求地址
    // process.env.BASE_API 自定义请求地址

window.BASE_URL =  'http://127.0.0.1:8108/maons/v0'
const service = axios.create({
    baseURL: window.BASE_URL, // api 的 base_url
    timeout: 60000 ,// 请求超时时间
   // withCredentials:true

})

// request拦截器
service.interceptors.request.use(
    config => {
    
        // const authToken = Lockr.get('Authorization');
        // if ( authToken) {            
        //     config.headers['Authorization'] = authToken;
        // }else{
        //     //config.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.ae22SYWjZ_RJRRhfWDpVFzWThu_6EQ-iBgAn8vdrR-w";
        // }
        const flag = config.headers['Content-Type'] && config.headers['Content-Type'].indexOf('application/json;charset=UTF-8') !== -1
        if (!flag) {
            const mult = config.headers['Content-Type'] && config.headers['Content-Type'].indexOf('multipart/form-data') !== -1
            if (mult) {
                config.data = config.data
            } else {
                config.data = qs.stringify(config.data)
            }
        } else {
            if (config.data === undefined || config.data === null) {
                // 不传参的情况下 json类型的提交数据，校准为 空对象
                config.data = {}
            }
        }
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
    //    if(!response){
    //         return "time out";
    //    }
        const res = response.data.result
       // console.log(res)
       switch (response.status){
            case 200:
                if (response.status === 200 && response.config.responseType === 'blob') { // 文件类型特殊处理
                    if (response.headers['content-disposition'] || (response.headers['content-type'] && response.headers['content-type'].indexOf('application/pdf') != -1)) {
                        return response
                    } else {
                        const resultBlob = new Blob([response.data], { type: 'application/json' })
                        const fr = new FileReader()
                        fr.onload = function() {
                            const result = JSON.parse(this.result)
                            if (result.msg) {
                                errorMessage(result.msg, result.code == 1 ? 'success' : 'error')
                            }
                        }
                        fr.readAsText(resultBlob)
                    }
                } else if (res.code !== 0) {
                    // 302	登录已失效
                    if (res.code === -1) {
                        confirmMessage(res.msg)
                    } else {
                        errorMessage(res.msg)
                    }
                   return Promise.reject(res)
                } else {
                    return res
                };         

            default:
                errorMessage(response)
                break;
       }
       
    },
    error => {
       
            if (error.response ) {
                const response = error.response
                switch(response.status){
                    case 401:
                        errorMessage(response)
                        break;
                    default:
                        errorMessage(response)
                    break;
                }           
                
            }
        if( error.request.timeout == 60000){
            return Promise.reject(error)
        }     
    }
)

export default service