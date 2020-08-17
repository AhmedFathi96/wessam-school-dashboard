import axios from 'axios';
import * as Requests from './urls'

export const deleteCourseAPI = (token:string , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.delete(Requests.deleteCourseURL(id),
        {
            headers,
        });
}