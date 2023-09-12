import $cookie from "vue-cookie";
import axios from 'axios'


const API = axios.create({
    baseURL: 'http://1.117.100.77:9090',
    timeout: 15000
})

    /*登录注册拦截*/
API.interceptors.request.use(config => {
    if (config.url !== '/user/login')
        config.headers['token'] = $cookie.get("token");
    return config
},error=>{
    return Promise.reject(error)
})
export default API