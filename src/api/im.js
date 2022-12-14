import request from '@/utils/request'
import * as rpc2request from '@/utils/jsonrpc2.js'
/**
 * 获取聊天联系人列表
 * @param {}
 */
 export async  function getAuthAPI(pwd) {
    var r= rpc2request.RpcRequestMessage('maons.GetAuth',pwd,'read')
   // console.log(JSON.stringify(r))
        var res =  await request({
            url: '',
            method: 'post',
            data: JSON.stringify(r)
            // headers: {
            //     'Content-Type': 'application/json',
            //   //  'Authorization' : 'Bearer 0'
            // }
        }) ;
        console.log(res);
        request.defaults.headers['Authorization'] = 'Bearer '+ res.data;
       // .headers[]
        return res
    }
/**
 * 获取聊天联系人列表
 * @param {}
 */
 export function getUserAPI() {
    var r= rpc2request.RpcRequestMessage('maons.GetUser')
   // console.log(JSON.stringify(r))
        return request({
            url: '',
            method: 'post',
            data: JSON.stringify(r),
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })  
    }



/**
 * 获取聊天联系人列表
 * @param {}
 */
 export function initContactsAPI(  size ) {
    var r= rpc2request.RpcRequestMessage('maons.InitContacts',size)
   // console.log(JSON.stringify(r))
        return request({
            url: '',
            method: 'post',
            data: JSON.stringify(r),
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        })  
    }


    

/**
 * 尝试连接
 * @param {}
 */
export function gonnContactAPI(id) {
    var r= rpc2request.RpcRequestMessage('maons.GonnContact',id)
   // console.log(JSON.stringify(r))
        return request({
            url: '',
            method: 'post',
            data: JSON.stringify(r),            
        })  
    }

/**
 * 获取聊天联系人列表
 * @param {}
 */
export function getContactsAPI(tag , size , fromuser) {
    var r= rpc2request.RpcRequestMessage('maons.GetContacts',tag,size,fromuser)
   // console.log(JSON.stringify(r))
        return request({
            url: '',
            method: 'post',
            data: JSON.stringify(r),            
        })  
    }

/**
 * 发送聊天消息
 * @param {*} data
 */
export function sendMessageAPI(data) {
    var r2=JSON.stringify(rpc2request.RpcRequestMessage('maons.SendMessage',data))
   // console.log(r2.params[0].content.lenght)
    return request({
        url: '',
        method: 'post',
        data: r2
    })
}
/**
 * 发送聊天消息
 * @param {*} data
 */
 export function RequestEnvent(clientid) {
    return request({
        url: '',
        method: 'post',
        data: JSON.stringify(rpc2request.RpcRequestMessage('maons.RequestEnvent',clientid)),
        timeout: 60000000000
        // headers: {
        //     timeout: 60000000000
        // }    
    })
}


/**
 * 发送聊天消息
 * @param {*} data
 */
export function forwardMessageAPI(data) {
    return request({
        url: 'enterprise/im/forwardMessage',
        method: 'post',
        data: data
    })
}
/**
 * 发送图片或文件消息
 * @param {*} data
 */
export function sendFileAPI(data) {
    return request({
        url: 'enterprise/upload/uploadFile',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

/**
 * 获取聊天记录
 * @param {*} data
 */
export function getMessageListAPI(size,form1,id) {
   // console.log(form1)
    return request({
        url: '',
        method: 'post',
        data: JSON.stringify(rpc2request.RpcRequestMessage('maons.GetMessagelist',size,form1,id))
    })
}

/**
 * 修改消息为已读
 * @param {*} data
 */
export function setMsgIsReadAPI(data) {
    return request({
        url: '',
        method: 'post',
        data: data
    })
}

/**
 * 撤回消息
 * @param {*} data
 */
export function undoMessageAPI(data) {
    return request({
        url: 'enterprise/im/undoMessage',
        method: 'post',
        data: data
    })
}

/**
 * 撤回消息
 * @param {*} data
 */
export function removeMessageAPI(data) {
    return request({
        url: 'enterprise/im/removeMessage',
        method: 'post',
        data: data
    })
}


/**
 * 设置
 * @param {*} data
 */
export function settingAPI(data) {
    return request({
        url: 'enterprise/im/setting',
        method: 'post',
        data: data
    })
}

/**
 * 修改群组名称
 * @param {*} data
 */
export function editGroupNameAPI(data) {
    return request({
        url: 'enterprise/group/editGroupName',
        method: 'post',
        data: data
    })
}

/**
 * 获取群成员列表
 * @param {*} data
 */
export function groupUserListAPI(data) {
    return request({
        url: 'enterprise/group/groupuserlist',
        method: 'post',
        data: data
    })
}

/**
 * 获取群成员列表
 * @param {*} data
 */
export function getAllUserAPI(data) {
    return request({
        url: 'enterprise/group/getAllUser',
        method: 'post',
        data: data
    })
}

/**
 * 创建群聊
 * @param {*} data
 */
export function addGroupAPI(data) {
    return request({
        url: 'enterprise/group/add',
        method: 'post',
        data: data
    })
}


/**
 * 设置管理员
 * @param {*} data
 */
export function setManagerAPI(data) {
    return request({
        url: 'enterprise/group/setManager',
        method: 'post',
        data: data
    })
}


/**
 * 设置管理员
 * @param {*} data
 */
export function removeUserAPI(data) {
    return request({
        url: 'enterprise/group/removeUser',
        method: 'post',
        data: data
    })
}

/**
 * 添加群成员
 * @param {*} data
 */
export function addGroupUserAPI(data) {
    return request({
        url: 'enterprise/group/addGroupUser',
        method: 'post',
        data: data
    })
}

/**
 * 移除群成员
 * @param {*} data
 */
export function removeGrouprAPI(data) {
    return request({
        url: 'enterprise/group/removeGroup',
        method: 'post',
        data: data
    })
}


/**
 * 设置公告
 * @param {*} data
 */
export function setNoticeAPI(data) {
    return request({
        url: 'enterprise/group/setNotice',
        method: 'post',
        data: data
    })
}

/**
 * 群聊设置
 * @param {*} data
 */
export function groupSettingAPI(data) {
    return request({
        url: 'enterprise/group/groupSetting',
        method: 'post',
        data: data
    })
}

/**
 * 群聊基本信息
 * @param {*} data
 */
export function getGroupInfoAPI(data) {
    return request({
        url: 'enterprise/group/groupInfo',
        method: 'post',
        data: data
    })
}


/**
 * 设置消息免打扰
 * @param {*} data
 */
export function isNoticeAPI(data) {
    return request({
        url: 'enterprise/im/isNotice',
        method: 'post',
        data: data
    })
}

/**
 * 设置消息免打扰
 * @param {*} data
 */
export function setChatTopAPI(data) {
    return request({
        url: 'enterprise/im/setChatTop',
        method: 'post',
        data: data
    })
}