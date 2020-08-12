import axios from 'axios';
import * as Requests from './urls'

export const getAbout = (token:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(Requests.getAboutURL , {headers});
}