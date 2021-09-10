import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


const useSession = () => {
  const router = useRouter()
  const [user, setUser] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("@token") == null){
      router.push("login")
    }
    if (localStorage.getItem("@usuario") !== null){
      setUser(JSON.parse(localStorage.getItem("@usuario")))
    }else{
      setUser(false)
    }
  }, [])
  return user
}
export default useSession;