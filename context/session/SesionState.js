import React, {useState} from 'react';
import sessionContext from './SessionContext'
const SessionState = ({children}) => {

    const [user, setUser] = useState(false)
    const getUser = () =>{
        if (localStorage.getItem("@usuario") !== null){
            setUser(JSON.parse(localStorage.getItem("@usuario")))
        }else{
            setUser(false)
        }
    }

    return ( 
        <sessionContext.Provider
            value={{
                user, setUser, getUser
            }}
        >
            {children}
        </sessionContext.Provider>
    );
}
export default SessionState;