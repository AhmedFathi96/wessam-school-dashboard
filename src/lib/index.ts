export interface IAdminUser{
    _id:string;
    name:string;
    email:string;
    phone:string;
    password:string;
    role:string;
}


export interface IStudent{
    _id:string;
    name:string;
    email:string;
    parent_name:string;
    grade:string;
    student_phone:string;
    parent_phone:string;
    address:string;
    course:string;
    status:string;
}

export interface ISliderItem{
    _id:string;
    slider_img:File;
    order:string;
    caption:string;
}

export interface IAboutSection{
    _id:string;
    about_img:File;
    header:string;
    content:string;
    order:number;
}


export interface ITestimonialSection{
    _id:string;
    testimonial_img:File;
    content:string;
    author:string;
    about_author:string;
    order:number;
}


export interface IGalleryImage{
    _id:string;
    gallery_img:File;
    height_ration:number;
    order:number;
}

export interface IBlogPost{
    _id:string;
    blog_cover_img:string;
    blog_post_img:string;
    post_content:string;
    header:string;
    content_body:string;
    createdAt?:string;
}

export interface IContactMessage{
    _id:string;
    first_name:string;
    last_name:string;
    email:string;
    phone:string;
    message:string;
    createdAt:string;
}