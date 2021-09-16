import { createUserHelper } from "@helper/UserHelper"
import  post  from '@module/post';

/* https://github.com/User0608/mujeresapi/blob/master/docs/USUARIO.md */
export const createUser = async({data}) =>{
    const sendData = createUserHelper({ "data": data })
    const res = await post({ src: "usuario ", data: sendData })
    return res
}