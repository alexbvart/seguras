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
        const dataSend = { 
            "username":data.username, 
            "password":data.password 
        }
        return dataSend
    } else {
        return undefined
    }
}