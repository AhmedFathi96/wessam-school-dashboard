import axios from 'axios';
import * as Requests from './urls'

export const getStudents = (token:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(Requests.getStudentsURL , {headers});
}