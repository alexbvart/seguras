import {getAlertByIdHelper, getAllAlertHelper} from '@helper/AlertHelper'
import { createInstitutionHelper } from '@helper/InstitutionHelper';
import getAll from "@module/getAll";
import getById from "@module/getById";
import post from "@module/post";

/* https://github.com/User0608/mujeresapi/blob/master/docs/ALERTA.md*/

export const createInstitution = async({data,usuario_id}) =>{
    const sendData = createInstitutionHelper({ "data": data, "usuario_id":usuario_id })
    const res = await post({ src: "institucion", data: sendData })
    console.log(res)
    return res
}

export const getAllInstitutions = async() =>{
    const res = await getAll({ src: "institucion"})
    /* const resComplet = await  getAllInstitutionHelper({ "data": res.data }) */
    return res.data
}
export const getInstitutionById = async({id}) =>{
    const res = await getById({ src: "institucion", id:id})
    /* const resComplet = await getInstitutionByIdHelper({ "data": res.data }) */
    return res.data.data
}
export const getMeInstitution = async() =>{
    const res = await getAll({ src: "institucion/me"})
    /* const resComplet = await  getAllInstitutionHelper({ "data": res.data }) */
    return res.data
}