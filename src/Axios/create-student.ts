import axios from 'axios';
import * as Requests from './urls'
import { IStudent } from '../lib/index';

export const createStudentAPI = (token:string , data: IStudent) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.post(Requests.createStudentURL , data , {headers});
}