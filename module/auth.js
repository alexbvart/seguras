import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

export const login = async ({ src, data }) => {
    await axiosinterceptor()
    const API_URL = process.env.NEXT_PUBLIC_API_AWS
    console.log("OOOOOOO>",API_URL)
    const response = await axios.post(`${API_URL}/${src}`, data)
    const res = response.data
    return res
}


const logout = () => {
    if (localStorage.getItem("@token") !== null) {
        localStorage.removeItem('@token');
    }
    if (localStorage.getItem("@usuario") !== null) {
        localStorage.removeItem('@usuario');
    }
    return true
}
export default logout;
