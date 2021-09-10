import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const create = async ({src, data}) => {
    await axiosinterceptor()
    const response = await axios.post(src, data)
    return console.log( response);
}
export default create;