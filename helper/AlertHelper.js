import { getAllUser, getMovilUser, getUserById } from "@service/UserServices"

/* https://github.com/User0608/mujeresapi/blob/master/docs/ALERTA.md */
export const createAlertHelper = async ({ data }) => {

}

export const getAllAlertHelper = async ({ data }) => {
    const res = await Promise.all(
        data.data.map(async (alert) => {
            const oneAle = await getAlertByIdHelper({ alert })
            return oneAle
        }))
    return res
}

export const getAlertByIdHelper = async ({ alert }) => {
    /* const user = alert?.usuario_id && await getUserById({ id: alert.usuario_id }) */
    const resFormat = {
        "alerta_id": alert.alerta_id,
        "latitude": alert.latitude,
        "longitude": alert.latitude,
        "usuario_id": alert.usuario_id,
        "usuario": alert.usuario,
        "estado": alert.estado,
        "multimedias": alert.multimedias,
        "created": alert.created,
        "updated": alert.updated,
        "deleted": alert.deleted
    }
    return resFormat;
}