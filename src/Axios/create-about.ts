import axios from 'axios';
import * as Requests from './urls'

export const createAboutAPI = (token:string , data: FormData) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.post(Requests.createAboutURL , data , {headers});
}