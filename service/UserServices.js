import { createUserHelper } from "@helper/UserHelper"
import getAll from "@module/getAll";
import getById from "@module/getById";
import  post  from '@module/post';

/* https://github.com/User0608/mujeresapi/blob/master/docs/USUARIO.md */
export const createUser = async({data}) =>{
    const sendData = createUserHelper({ "data": data })
    const res = await post({ src: "usuario", data: sendData })
    return res
}
export const getAllUser = async() =>{
    const res = await getAll({ src: "usuario"})
    return res.data
}
export const getMovilUser = async() =>{
    const res = await getAll({ src: "usuario/movil"})
    return res.data
}
export const getFreeUser = async() =>{
    const res = await getAll({ src: "usuario/free"})
    return res.data
}
export const getUserById = async({id}) =>{
    const res = await getById({ src: "usuario", id:id})
    return res.data
}