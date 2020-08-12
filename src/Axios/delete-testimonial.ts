import axios from 'axios';
import * as Requests from './urls'

export const deleteTestimonialAPI = (token:string , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.delete(Requests.deleteTestimonialURL(id),
        {
            headers,
        });
}