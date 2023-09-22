import Constant from "./constant";
import { delUserData, getUserData, isUserLoggedIn } from "./Utils";
// import {basicNotif} from '@shared/notification';

const appConstant = {...Constant}

const API_BASIC = axios.create({
    baseURL: `${appConstant.url}`
});
const API_BASIC_folder = axios.create({
    baseURL: `${appConstant.mediaUrl}`
});

API_BASIC.interceptors.request.use(
    config => {
        if (isUserLoggedIn()) {
            const tokenBearer = getUserData().access_token
            config.headers.authorization = `${appConstant.tokenType} ${tokenBearer}`
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });


API_BASIC.interceptors.response.use(
    response => response,
    error => {
        const {config, response} = error

        if(response && response.status === 401) {
            if(location?.pathname !== '/' && isUserLoggedIn()) {
                alert("Session expirée, veuillez vous reconnecter ")
                delUserData();
                location.replace('/')
            }
        }
        return Promise.reject(error);
    })
    
export default API_BASIC;