import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const deleteById = async ({src,id}) => {
    await axiosinterceptor()
    return await axios.delete(`${src}/${id}`)
}
export default deleteById;