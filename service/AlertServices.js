import {getAllAlertHelper} from '@helper/AlertHelper'
import getAll from "@module/getAll";
import getById from "@module/getById";

/* https://github.com/User0608/mujeresapi/blob/master/docs/ALERTA.md*/

/* export const createAlert = async({data}) =>{
    const sendData = createPersonHelper({ "data": data })
    const res = await post({ src: "persona", data: sendData })
    return res
} */
export const getAllAlerts = async() =>{
    const res = await getAll({ src: "alerta"})
    const resComplet = await  getAllAlertHelper({ "data": res.data })
    return resComplet
}
export const getAlertById = async({id}) =>{
    const res = await getById({ src: "alerta", id:id})
    const resComplet = await getAlertByIdHelper({ "data": res.data })
    return resComplet
}
