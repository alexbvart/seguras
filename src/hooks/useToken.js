import React, { useState, useEffect } from 'react'

export const useToken = () => {
    const [token, setToken] = useState(null)
    useEffect(() => {
        setToken(localStorage.getItem("@token"))
        console.log(localStorage.getItem("@token"))
    }, [])
    return token
}
