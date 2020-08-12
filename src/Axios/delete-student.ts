import axios from 'axios';
import * as Requests from './urls'

export const deleteStudentAPI = (token:string , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.delete(Requests.deleteStudentURL(id),
        {
            headers,
        });
}