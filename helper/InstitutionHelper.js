import { getAllUser, getMovilUser, getUserById } from "@service/UserServices"

/* https://github.com/User0608/mujeresapi/blob/master/docs/ALERTA.md */
export const createInstitutionHelper = ({ data,usuario_id }) => {
    if (data) {
        const sendData = {
            "nombre": data.nombre,
            "persona": data.persona,
            "telefono": data.telefono,
            "email": data.email,
            "tipo": data.tipo,
            "usuario_id": usuario_id,
            "direccion": {
                "provincia": data.provincia,
                "distrito": data.distrito,
                "direccion": data.direccion,
                "referencia": data.referencia,
            }
        }
        return sendData
    } else {
        return undefined
    }
}

export const getAllInstitutionHelper = async ({ data }) => {
    const res = await Promise.all(
        data.data.map(async (institucion) => {
            const oneAle = await getInstitutionByIdHelper({ institucion })
            return oneAle
        }))
    return res
}

export const getInstitutionByIdHelper = async ({ institucion }) => {

    const resFormat = {
        "nombre":institucion.nombre,
        "persona": institucion.persona,
        "telefono": institucion.telefono,
        "email": institucion.email,
        "tipo": institucion.tipo,
        "usuario_id": institucion.usuario_id,
        "direccion": {
            "provincia": institucion.provincia,
            "distrito": institucion.distrito,
            "direccion": institucion.direccion,
            "referencia": institucion.referencia
        }   
    }
    return resFormat;
}