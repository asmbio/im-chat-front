
  var current_id = 0;
  export function  RpcRequestMessage(method1 ,...parameterList) {        
    //console.log(current_id++)
      return { id : current_id++,
                jsonrpc: '2.0',
                method: method1,
                params:parameterList
        }
   }
