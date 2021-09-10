import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const getById = async ({src, id}) => {
    await axiosinterceptor()
    const response = await axios.get(`${src}/${id}`)
    return response
}
export default getById;