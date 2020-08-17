import axios from 'axios';
import * as Requests from './urls'
import { ICourse } from "../lib/index";

export const createCourseAPI = (token:string , data: ICourse) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.post(Requests.createCourseURL , data , {headers});
}