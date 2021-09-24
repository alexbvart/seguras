export const createPoliceHelper = ({ data }) => {
    if (data) {
        const sendData = {
            "institucion_id": parseInt(data.institucion_id),
            "nombre": data.nombre,
            "apellido_paterno": data.apellido_paterno,
            "apellido_materno": data.apellido_materno,
            "telefono": data.telefono,
            "dni": data.dni,
            "provincia": data.provincia,
            "distrito": data.distrito,
            "direccion": data.direccion,
            "referencia": data.referencia,
        }
        return sendData
    } else {
        return undefined
    }
}


export const getAllPoliceHelper = async ({ data }) => {
    const res = data.map((alert) => {
        return getAlertHelperById({ data: alert })
    })
    return res
}

export const getPoliceByIdHelper = async ({ data }) => {
    const alert = data?.alert_id && getAlertById({ id: data.alert_id })
    /*     const institucion = data?.institucion_id && getInstitucionById({ id: data.institucion_id })
        const colaborador = data?.colaborador_id && getColaboradorById({ id: data.colaborador_id }) */
    const resFormat = {
        "titulo": data.titulo,
        "alerta": alert,
        "institucion_id": institucion_id,
        "nivel": data.nivel,
        "descripcion": data.descripcion,
        "colaborador_id": colaborador_id
    }
    return resFormat;
}