import axios from 'axios';
import * as Requests from './urls'

export const getBlogPosts = (token:string) =>{
    const headers = { Authorization: `Bearer ${token}` };
    return axios.get(Requests.getBlogPostsURL , {headers});
}