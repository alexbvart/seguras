import { createCollaboratorHelper } from "@helper/CollaboratorHelper"
import getAll from "@module/getAll";
import  post  from '@module/post';

/* https://github.com/User0608/mujeresapi/blob/master/docs/PERSONA.md */
export const createCollaborator = async({persona_id, usuario_id}) =>{
    const sendData = createCollaboratorHelper({ persona_id:persona_id, usuario_id: usuario_id})
    const res = await post({ src: "colaborador", data: sendData })
    return res
}

export const getMeCollaborator = async () =>{
    const res = await getAll({src:"colaborador/me"})
    return res.data
}
export const getAllCollaborator = async () =>{
    const res = await getAll({src:"colaborador"})
    return res.data
}