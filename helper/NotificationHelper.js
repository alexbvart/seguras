/* export const createCollaboratorHelper = ({ persona_id, usuario_id}) => {
    if (persona_id && usuario_id) {
        const dataSend = { 
            "persona_id": persona_id, 
            "usuario_id": usuario_id  }
        return dataSend
    } else {
        return undefined
    }
}
 */

import { getAlertById } from "@service/AlertServices"
import { getCollaboratorById } from "@service/CollaboratorServices"
import { getInstitutionById } from "@service/InstitutionServices"

export const getAllNotificationtHelper = async ({ data }) => {
    const res = data.map((alert)=>{
        return getNotificationByIdHelper({data:alert})
    })
    return res
}

export const getNotificationByIdHelper = async ({ data }) => {

    console.log("getNotificationByIdHelper",{data})
    const alert = data?.alert_id && await getAlertById({ id: data.alert_id })
    const institucion = data?.institucion_id && getInstitutionById({ id: data.institucion_id })
    const colaborador = data?.colaborador_id && getCollaboratorById({ id: data.colaborador_id })
    const resFormat =     {
        "titulo":data.titulo,
        "alerta": alert,
        "institucion_id":institucion,
        "nivel": data.nivel,
        "descripcion":data.descripcion,
        "colaborador_id":colaborador
    }
    return resFormat;
}