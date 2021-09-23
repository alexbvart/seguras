export const loginUserHelper = ({ data }) => {
    if (data) {
        const { username, password } = data;
        const dataSend = { username, password }
        return dataSend
    } else {
        return undefined
    }
}
export const createUserHelper = ({ data }) => {
    if (data) {
        const roles = data.roles ? 
        data.roles.map((r)=>{
            return {"role_id": parseInt(r)}
        })
        :
        [{"role_id": 2}]
        const dataSend = { 
            "username":data.username, 
            "password":data.password ,
            "roles":roles ,
        }
        return dataSend
    } else {
        return undefined
    }
}