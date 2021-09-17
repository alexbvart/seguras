import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const getById = async ({src, id}) => {
    const API_URL = process.env.NEXT_PUBLIC_API_PORT
    await axiosinterceptor()
    const response = await axios.get(`${API_URL}/${src}/${id}`)
    return response
}
export default getById;