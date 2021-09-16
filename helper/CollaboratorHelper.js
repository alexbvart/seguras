export const createCollaboratorHelper = ({ persona_id, usuario_id}) => {
    if (persona_id && usuario_id) {
        const dataSend = { 
            "persona_id": persona_id, 
            "usuario_id": usuario_id  }
        return dataSend
    } else {
        return undefined
    }
}