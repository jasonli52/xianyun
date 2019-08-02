import { Message } from "element-ui";

//axios拦截插件
//每个nuxt的插件会暴露出一个函数
export default({$axios})=>{
    $axios.onError(res=>{
        const{statusCode,message}=res.response.data
        if(statusCode===400){
            Message.warning(message)
        }

    })
}