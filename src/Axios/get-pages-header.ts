import axios from 'axios';
import * as Requests from './urls'

export const getPagesHeader = (token:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(Requests.getPagesURL , {headers});
}