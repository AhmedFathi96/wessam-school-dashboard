const production = 'https://wessammohamed.com/';
const local = 'http://productionhost:5026/';


export const loginUTR     = `${production}api/login`;


export const getAdminsURL = `${production}api/admin/get-admins`;
export const createAdminsURL = `${production}api/admin/create-admin`;
export const editAdminsURL = (id:string) => `${production}api/admin/update-admin/${id}`;
export const deleteAdminsURL = (id:string) => `${production}api/admin/delete-admin/${id}`;


export const getStudentsURL = `${production}api/Student/get-Students`;
export const createStudentURL = `${production}api/Student/create-Student`;
export const editStudentURL = (id:string) => `${production}api/Student/update-Student/${id}`;
export const deleteStudentURL = (id:string) => `${production}api/Student/delete-Student/${id}`;



export const getSliderItemsURL = `${production}api/slider/get-sliders`;
export const createSliderItemsURL = `${production}api/slider/add-slider`;
export const editSliderItemsURL = (id:string) => `${production}api/slider/update-slider/${id}`;
export const deleteSliderItemsURL = (id:string) => `${production}api/slider/delete-slider/${id}`;


export const getAboutURL = `${production}api/about/get-about`;
export const createAboutURL = `${production}api/about/create-about`;
export const editAboutURL = (id:string) => `${production}api/about/update-about/${id}`;
export const deleteAboutURL = (id:string) => `${production}api/about/delete-about/${id}`;

export const getTestimonialsURL = `${production}api/testimonial/get-testimonials`;
export const createTestimonialURL = `${production}api/testimonial/add-testimonial`;
export const editTestimonialURL = (id:string) => `${production}api/testimonial/update-testimonial/${id}`;
export const deleteTestimonialURL = (id:string) => `${production}api/testimonial/delete-testimonial/${id}`;



export const getGalleryImagesURL = `${production}api/gallery/get-gallery-images`;
export const createGalleryImageURL = `${production}api/gallery/add-gallery-image`;
export const editGalleryImageURL = (id:string) => `${production}api/gallery/update-gallery-image/${id}`;
export const deleteGalleryImageURL = (id:string) => `${production}api/gallery/delete-gallery-image/${id}`;


export const getBlogPostsURL = `${production}api/blog/get-blog-posts`;
export const createBlogPostURL = `${production}api/blog/add-blog-post`;
export const editBlogPostURL = (id:string) => `${production}api/blog/update-blog-post/${id}`;
export const deleteBlogPostURL = (id:string) => `${production}api/blog/delete-blog-post/${id}`;




export const getContactsURL = `${production}api/contact/get-contacts`;
export const creatContactURL = `${production}api/contact/create-contact`;
export const deleteContactURL = (id:string) => `${production}api/contact/delete-contact/${id}`;




export const getCoursesURL = `${production}api/courses/get-courses`;
export const createCourseURL = `${production}api/courses/create-course`;
export const editCourseURL = (id:string) => `${production}api/courses/update-course/${id}`;
export const deleteCourseURL = (id:string) => `${production}api/courses/delete-course/${id}`;






export const getPagesURL = `${production}api/pages/get-all-pages`;
export const editHighlightsURL = (id:string) => `${production}api/pages/update-highlights-page/${id}`;
export const editCoursesURL = (id:string) => `${production}api/pages/update-courses-page/${id}`;
export const editBlogURL = (id:string) => `${production}api/pages/update-blog-page/${id}`;
export const editContactURL = (id:string) => `${production}api/pages/update-contact-page/${id}`;
export const editTestimonialsURL = (id:string) => `${production}api/pages/update-testimonial-page/${id}`;


export const editInfoURL = (id:string) =>  `${production}api/info/update-info/${id}`;
export const getInfoURL =  `${production}api/info/get-info`;



// export const createCourseURL = `${production}api/courses/create-course`;
// export const editCourseURL = (id:string) => `${production}api/courses/update-course/${id}`;
// export const deleteCourseURL = (id:string) => `${production}api/courses/delete-course/${id}`;
