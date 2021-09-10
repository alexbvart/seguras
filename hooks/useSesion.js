import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import SessionContext from 'context/session/SessionContext';

const useSession = () => {
  const router = useRouter()
  const {user, setUser, getUser} = useContext(SessionContext)

  useEffect(() => {
    if (localStorage.getItem("@token") == null){
      router.push("login")
    }
    getUser()
  }, [])
  return user
}
export default useSession;