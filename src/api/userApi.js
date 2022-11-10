import axios from 'axios';

export const fetchUserApi = (id = 3) => axios.get('https://jsonplaceholder.typicode.com/users/'+id);