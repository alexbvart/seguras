import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';
const post = async ({ src, data }) => {
    await axiosinterceptor()
    const API_URL = process.env.NEXT_PUBLIC_API_PORT
    const response = await axios.post(`${API_URL}/${src}`, data)
    return response
}
export const postLogin = async ({ src, data }) => {
    await axiosinterceptor()
    const API_URL = process.env.NEXT_PUBLIC_API_AWS
    console.log("OOOOOOO>",API_URL)
    const response = await axios.post(`${API_URL}/${src}`, data)
    const res = response.data
    return res
}
