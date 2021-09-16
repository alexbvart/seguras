import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';
const post = async ({ src, data }) => {
    await axiosinterceptor()
    const API_URL = process.env.NEXT_PUBLIC_API_AWS
    const response = await axios.post(`${API_URL}/${src}`, data)
    return response
}

export default post;
