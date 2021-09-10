import React, {useState} from 'react';
import sessionContext from './SessionContext'
const SessionState = ({children}) => {

    const [user, setUser] = useState(false)
    const [role, setRole] = useState("admin")
    const getUser = () =>{
        if (localStorage.getItem("@usuario") !== null){
            setUser(JSON.parse(localStorage.getItem("@usuario")))
        }else{
            setUser(false)
        }
    }
    const getUserRole = () =>{
        if (localStorage.getItem("@usuario") !== null){
            const rolesuser = JSON.parse(localStorage.getItem("@usuario"))
            setRole(rolesuser.roles[0].nombre)
        }else{
            setUser(false)
        }
    }

    return ( 
        <sessionContext.Provider
            value={{
                user, setUser, getUser,
                role, setRole, getUserRole,
            }}
        >
            {children}
        </sessionContext.Provider>
    );
}
export default SessionState;