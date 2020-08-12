import React from "react";
import HomeSlider from "./slider";
import HomeAbout from "./about";
import HomeTestimonial from "./testimonial";


const HomePage:React.FC = () => {

    return (
        <div>
            <HomeSlider />
            <br />
            <HomeAbout />
            <br />
            <HomeTestimonial />
        </div>
    );
}

export default HomePage;