import axios from 'axios';
import axiosinterceptor from './axiosinterceptor';

const updateById = async ({src,id,updata}) => {
    await axiosinterceptorr()
    const response = await axios.patch(`${src}/${id}`,updata)
    return response
}
export default updateById;

/* PATCH es adecuado para hacer modificaciones parciales, o para enviar un conjunto de instrucciones en lugar del resultado final */