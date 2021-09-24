import { createPersonHelper } from "@helper/PersonHelper"
import getAll from "@module/getAll";

/* https://github.com/User0608/mujeresapi/blob/master/docs/ROLES.md */
/* export const createAlert = async({data}) =>{
    const sendData = createPersonHelper({ "data": data })
    const res = await post({ src: "persona", data: sendData })
    return res
} */
export const getRoles = async() =>{
    const res = await getAll({ src: "roles "})
    /* const sendData = createPersonHelper({ "data": data }) */
    return res.data
}