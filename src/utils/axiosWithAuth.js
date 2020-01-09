import axios from 'axios';

export function axiosWithAuth(){
    const token = sessionStorage.getItem('token');
    
    return axios.create({
        baseURL: 'https://bw-fresh-farm-produce-backend.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}