import React, { useEffect } from "react";
import HomeSlider from "./slider";
import HomeAbout from "./about";
import HomeTestimonial from "./testimonial";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";
import { getAbout } from "../../React-Redux/Actions/about-action";
import { getSliderItems } from "../../React-Redux/Actions/slider-action";
import { getTestimonials } from "../../React-Redux/Actions/testimonial-action";
import Loader from 'react-loader-spinner';
import ReactNotification from 'react-notifications-component';



const HomePage:React.FC = () => {

    const {About,about_is_loading} = useSelect(state=> state.aboutReducer)
    const {SliderItems , slider_is_loading} = useSelect(state=> state.sliderItemsReducer)
    const {Testimonial , testimonial_is_loading} = useSelect(state=> state.testimonialReducer)

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAbout());
        dispatch(getSliderItems());
        dispatch(getTestimonials());
    },[])
    
    return (
        <div>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (about_is_loading && slider_is_loading && testimonial_is_loading)?
                    <>
                        <HomeSlider SliderItems={SliderItems} />
                        <br />
                        <HomeAbout About={About} />
                        <br />
                        <HomeTestimonial Testimonial={Testimonial} />
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

export default HomePage;