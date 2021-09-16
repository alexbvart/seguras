export const createPersonHelper = ({ data }) => {
    if (data) {
        const sendData = {
            "nombre": data.nombre,
            "apellido_paterno": data.apellido_paterno,
            "apellido_materno": data.apellido_materno,
            "telefono": data.telefono,
            "dni": data.dni,
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