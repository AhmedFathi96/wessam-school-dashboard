import axios from 'axios';
import * as Requests from './urls'

export const createBlogPostAPI = (token:string , data: FormData) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.post(Requests.createBlogPostURL , data , {headers});
}