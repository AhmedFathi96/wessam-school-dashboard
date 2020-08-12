import axios from 'axios';
import * as Requests from './urls'

export const createTestimonialAPI = (token:string , data: FormData) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.post(Requests.createTestimonialURL , data , {headers});
}