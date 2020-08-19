import React, { useEffect } from "react";
import Blog from "./Blog";
import { useSelect } from "../../helper";
import { getBlogPost } from "../../React-Redux/Actions/blog-action";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import ReactNotification from 'react-notifications-component';



const BlogPage:React.FC = () => {

    const dispatch = useDispatch();
    const {BlogPost, blog_is_loading} = useSelect(state => state.blogReducer);
    useEffect(()=>{
        dispatch(getBlogPost());
    },[])
    return (
        <div>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (blog_is_loading)?
                    <>
                    <Blog BlogPost={BlogPost } />
                    </>
                    :
                    <div style={{margin: '25% 40%'}}>
                        <Loader
                            type="Puff"
                            color="#B09E80"
                            height={150}
                            width={150}
                        />
                    </div>
                    
            }
            
        </div>
    );
}

export default BlogPage;