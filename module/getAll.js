import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const getAll = async ({src}) => {
    await axiosinterceptor()
    const API_URL = process.env.NEXT_PUBLIC_API_AWS
    const getAllData = await axios.get(`${API_URL}/${src}`)

    return getAllData.data;
}
export default getAll;