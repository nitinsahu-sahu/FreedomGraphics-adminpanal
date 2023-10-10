import axios from 'axios'

const token = localStorage.getItem('admin_token');
const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Authorization': token ? `Bearer ${token}` : '',
    }
})
export default instance