import axios from 'axios';
import * as Requests from './urls'

export const deleteBlogPostAPI = (token:string , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.delete(Requests.deleteBlogPostURL(id),
        {
            headers,
        });
}