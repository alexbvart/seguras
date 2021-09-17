import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const deleteById = async ({src,id}) => {
    const API_URL = process.env.NEXT_PUBLIC_API_PORT
    await axiosinterceptor()
    return await axios.delete(`${API_URL}/${src}/${id}`)
}
export default deleteById;