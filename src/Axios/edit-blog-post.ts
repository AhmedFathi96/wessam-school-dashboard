import axios from 'axios';
import * as Requests from './urls'

export const editBlogPostAPI = (token:string , data: FormData , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.put(Requests.editBlogPostURL(id) , data, 
        {
            headers,
        });
}