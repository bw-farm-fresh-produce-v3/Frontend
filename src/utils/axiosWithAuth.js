import axios from 'axios';

function axiosWithAuth(){
    const token = sessionStorage.getItem('token');
    
    return axios.create({
        baseURL: 'https://bw-fresh-farm-produce-backend.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}

export default axiosWithAuth;