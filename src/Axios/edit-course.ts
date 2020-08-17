import axios from 'axios';
import * as Requests from './urls'
import { ICourse } from "../lib/index";

export const editCourseAPI = (token:string , data: ICourse , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.put(Requests.editCourseURL(id) , data, 
        {
            headers,
        });
}