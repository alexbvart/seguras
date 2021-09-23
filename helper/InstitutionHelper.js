import { getAllUser, getMovilUser, getUserById } from "@service/UserServices"

/* https://github.com/User0608/mujeresapi/blob/master/docs/ALERTA.md */
export const createInstitutionHelper = async ({ data }) => {

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