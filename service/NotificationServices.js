import { getAllNotificationtHelper,getNotificationByIdHelper } from "@helper/NotificationHelper"
import getAll from "@module/getAll";
import getById from "@module/getById";

/* https://github.com/User0608/mujeresapi/blob/master/docs/ALERTA.md*/
/* export const createAlert = async({data}) =>{
    const sendData = createPersonHelper({ "data": data })
    const res = await post({ src: "persona", data: sendData })
    return res
} */

export const getAllNotification = async() =>{
    const res = await getAll({ src: "notificacion"})
    const resComplet = getAllNotificationtHelper({ "data": res.data.data })
    return resComplet
}
export const getAllMeNotification = async() =>{
    const res = await getAll({ src: "notificacion/institucion"})
    const resComplet = getAllNotificationtHelper({ "data": res.data.data })
    return resComplet
}

export const getNotificationById = async({id}) =>{
    const res = await getById({ src: "notificacion", id:id})
    const resComplet = getNotificationByIdHelper({ "data": res.data })
    return resComplet
}