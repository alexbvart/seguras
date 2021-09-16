import { createCollaboratorHelper } from "@helper/CollaboratorHelper"
import  post  from '@module/post';

/* https://github.com/User0608/mujeresapi/blob/master/docs/PERSONA.md */
export const createCollaborator = async({persona_id, usuario_id}) =>{
    const sendData = createCollaboratorHelper({ persona_id:persona_id, usuario_id: usuario_id})
    const res = await post({ src: "colaborador", data: sendData })
    return res
}