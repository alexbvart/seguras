import axios from 'axios';

const post = async ({src, data}) => {
    const API_URL = process.env.NEXT_PUBLIC_API_PORT
    const response = await axios.post(`${API_URL}/${src}`, data)    
    return response
}
export default post;