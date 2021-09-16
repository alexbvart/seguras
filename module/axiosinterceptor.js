import axios from 'axios';

const axiosinterceptor = () => {

    if (localStorage.getItem("@token") !== null) {
        axios.interceptors.request.use(
            async config => {
                const token = localStorage.getItem('@token');
                if (token) {
                    config.headers = {
                        'Access-Control-Allow-Headers': 'x-access-token',
                        'X-WP-Nonce': 'my-wp-nonce-here',
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    }
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
    }
}
export default axiosinterceptor;