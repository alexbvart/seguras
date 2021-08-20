import getAll from "@services/getAll";

const userRepository = async () => {
    const res = await getAll({ src: "roles" })
    const user = {
        "admin": {
            "id": 1,
            "nombre": "admin",
            "descripction": "todos los permisos"
        },
        "user-t1": {
            "id": 2,
            "nombre": "user-t1",
            "descripction": "usuario aplicativo mobil"
        },
        "user-t2": {
            "id": 3,
            "nombre": "user-t2",
            "descripction": "usuario monitoreo",
            "link": "report"
        },
        "user-ii": {
            "id": 4,
            "nombre": "user-ii",
            "descripction": "usuario institucion",
            "link": "notification"
        }
    }
    return user
}
export default userRepository;