import axios from 'axios';
import * as Requests from './urls'

export const editAboutAPI = (token:string , data: FormData , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.put(Requests.editAboutURL(id) , data, 
        {
            headers,
        });
}