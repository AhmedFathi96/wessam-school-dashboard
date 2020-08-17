import axios from 'axios';
import * as Requests from './urls'

export const getCourses = (token:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(Requests.getCoursesURL , {headers});
}