import axios from 'axios';
import * as Requests from './urls'

export const getTestimonials = (token:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(Requests.getTestimonialsURL , {headers});
}