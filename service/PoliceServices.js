import { createPoliceHelper } from "@helper/PoliceHelper"
import  post  from '@module/post';
import getAll from "@module/getAll";
import getById from "@module/getById";

/* https://github.com/User0608/mujeresapi/blob/master/docs/PoliceA.md */
export const createPolice = async({data}) =>{
    const sendData = createPoliceHelper({ "data": data })
    const res = await post({ src: "efectivo", data: sendData })
    return res
}

export const getAllPolice = async() =>{
    const res = await getAll({ src: "efectivo"})
    return res
}
export const getAllMePolice = async() =>{
    const res = await getAll({ src: "efectivo/institucion"})
    return res
}

export const getPoliceById = async({id}) =>{
    const res = await getById({ src: "efectivo/institucion", id:id})
    const resComplet = getPoliceByIdHelper({ "data": res.data })
    return resComplet
}