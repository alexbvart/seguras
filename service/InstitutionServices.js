import {getAlertByIdHelper, getAllAlertHelper} from '@helper/AlertHelper'
import getAll from "@module/getAll";
import getById from "@module/getById";

/* https://github.com/User0608/mujeresapi/blob/master/docs/ALERTA.md*/

/* export const createAlert = async({data}) =>{
    const sendData = createPersonHelper({ "data": data })
    const res = await post({ src: "persona", data: sendData })
    return res
} */
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
