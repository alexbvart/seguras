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

const getAllNotificationtHelper = async ({ data }) => {
    const res = data.map((alert)=>{
        return getAlertHelperById(alert)
    })
    return res
}

const getNotificationByIdHelper = async ({ data }) => {
    const alert = data?.alert_id && getAlertById({ id: data.alert_id })
/*     const institucion = data?.institucion_id && getInstitucionById({ id: data.institucion_id })
    const colaborador = data?.colaborador_id && getColaboradorById({ id: data.colaborador_id }) */
    const resFormat =     {
        "titulo":data.titulo,
        "alerta": alert,
        "institucion_id":institucion_id,
        "nivel": data.nivel,
        "descripcion":data.descripcion,
        "colaborador_id":colaborador_id
    }
    return resFormat;
}