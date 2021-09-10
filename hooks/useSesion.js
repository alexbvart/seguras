import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


const useSession = () => {
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem("@token") == null){
      router.push("login")
    }

  }, [])
}
export default useSession;