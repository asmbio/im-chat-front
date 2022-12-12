<template>
    <div>
        <audio id="chatAudio">
        <!-- <source src="./assets/voice/notify.ogg" type="audio/ogg"> -->
        <source src="../assets/voice/notify.mp3" type="audio/mpeg">
        <!-- <source src="./assets/voice/notify.wav" type="audio/wav"> -->
        </audio>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {RequestEnvent} from "@/api/im";

    export default {
        name: "socket",
        data() {
            return {
                user:null,
                loop:false
               // websocket: null,
            }
        },
        methods: {
   
            initWebSocket(user) { //初始化weosocket
                //ws地址
                
                this.user= user;
                if (this.loop){
                    return;
                }
                this.loop=true;
                // 调用getenvent 接口 
                // 循环调用
                this.loopEnvent(user.id);
        
                // const WS_URI = this.getWsUrl();
                // this.websocket = new WebSocket(WS_URI);
                // this.websocket.onmessage = this.websocketOnMessage;
                // this.websocket.onclose = this.websocketClose;
                // Vue.prototype.$websocket = this.websocket;

            },

            async  loopEnvent(id){       
                console.log("start loop ")
                while (this.loop){
                    var data =await RequestEnvent(id);
                   // console.log(data);
                    if (data){
         
                        this.websocketOnMessage(data);
                    }else{
                        await new Promise((r)=>setTimeout(r,1000));
                    }
                }
               
            },
            websocketOnMessage(e) { //数据接收
               // console.log(e);
               // const data = JSON.parse(e.data);
               // let userInfo=Lockr.get('UserInfo');
                for (const i in e.data) {
                    switch (e.data[i]['type']) {
                    // 服务端ping客户端
                    case 'ping':
                        this.websocketSend({type:"pong"});
                        break;
                    // 登录 更新用户列表
                    case 'init':
                        // Lockr.set('client_id',data['client_id']);
                        // bindClientIdAPI({client_id: data['client_id'],user_id:userInfo.user_id}).then(res=>{
                        //     this.websocketSend({type:"bindUid",user_id:userInfo.user_id});
                        //     console.log(data['client_id'],'消息服务启动成功');
                        // }).catch(error => {
                        //     console.log('连接失败');
                        // })
                        break;
                    default:
                        this.$store.commit('catchSocketAction', e.data[i]);
                        break;
                }
                } 
               
            },
            // websocketSend(agentData) {//数据发送
            //     var data=JSON.stringify(agentData);
            //     this.websocket.send(data);
            // },
            // websocketClose(e) {  //关闭
            //     let userInfo=Lockr.get('UserInfo');
            //     offlineAPI({user_id:userInfo.user_id}).then(res=>{
            //         console.log("connection closed (" + e.code + ")");
            //     })
            // },
            playAudio () {
                const audio = document.getElementById('chatAudio');
                // 从头播放
                audio.currentTime = 0;
                audio.play();
            }
        },
        created() {
            //this.initWebSocket()
        }
    }
</script>
