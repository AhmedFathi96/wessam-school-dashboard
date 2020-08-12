import axios from 'axios';
import * as Requests from './urls'
import { IStudent} from "../lib/index";

export const editStudentAPI = (token:string , data: IStudent , id:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.put(Requests.editStudentURL(id) , data, 
        {
            headers,
        });
}