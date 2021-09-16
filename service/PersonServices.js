import { createPersonHelper } from "@helper/PersonHelper"
import  post  from '@module/post';

/* https://github.com/User0608/mujeresapi/blob/master/docs/PERSONA.md */
export const createPerson = async({data}) =>{
    const sendData = createPersonHelper({ "data": data })
    const res = await post({ src: "persona ", data: sendData })
    console.log(res)
    return res
}