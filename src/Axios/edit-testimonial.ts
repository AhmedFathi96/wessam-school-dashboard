import axios from 'axios';
import * as Requests from './urls'

export const editTestimonialAPI = (token:string , data: FormData , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.put(Requests.editTestimonialURL(id) , data, 
        {
            headers,
        });
}