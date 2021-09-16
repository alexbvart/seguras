import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const put = async ({src,id,pupdata}) => {
    await axiosinterceptor()
    const response = await axios.put(`${src}/${id}`,pupdata)
    return response
}
export default put;
/* PUT requiere enviar una representación completa del recurso que se está modificando */