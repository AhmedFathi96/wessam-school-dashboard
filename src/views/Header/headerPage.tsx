import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PageHeader from ".";
import { useSelect } from "../../helper";
import { getPagesHeaders } from "../../React-Redux/Actions/pages-headers-action";
import Loader from "react-loader-spinner";
import ReactNotification from 'react-notifications-component';


const Headers:React.FC = (props) => {


    const dispatch = useDispatch();
    const {PagesHeaders , PagesHeaders_is_loading} = useSelect(state => state.pagesHeadersReducer)
    useEffect(() => {
        dispatch(getPagesHeaders())
        console.log(PagesHeaders);
    } ,[])

    return (
        <>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                PagesHeaders_is_loading?
                <div>
                <PageHeader 
                    header={PagesHeaders.highlights_header}
                    header_image={`api/pages/view-highlights-page-cover-image`} 
                    page_name="highlights"
                    text={PagesHeaders.highlights_text}  
                    id={PagesHeaders._id}
                />
                <br />
                <PageHeader 
                    header={PagesHeaders.courses_header} 
                    header_image={`api/pages/view-courses-page-cover-image`}
                    page_name="courses" 
                    text={PagesHeaders.courses_text}  
                    id={PagesHeaders._id}
                />
                <br />
                <PageHeader 
                    header={PagesHeaders.blog_header} 
                    header_image={`api/pages/view-blog-page-cover-image`}
                    page_name="blog" 
                    text={PagesHeaders.contact_text}
                    id={PagesHeaders._id}
                />
                <PageHeader 
                    header={PagesHeaders.contact_header} 
                    header_image={`api/pages/view-contact-page-cover-image`}
                    page_name="contact" 
                    text={PagesHeaders.contact_text}  
                    id={PagesHeaders._id}
                />
                <br />
                <PageHeader 
                    header={PagesHeaders.testimonial_header} 
                    header_image={`api/pages/view-testimonial-page-cover-image`}
                    page_name="testimonial" 
                    text={PagesHeaders.testimonial_text} 
                    id={PagesHeaders._id} 
                />
            
            </div>
            
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
        
    </>
    );
}

export default Headers;