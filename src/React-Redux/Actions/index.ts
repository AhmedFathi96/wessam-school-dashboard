export const genericAction = (action:string) => ({
    fulfilled: `${action}_FULFILLED`,
    rejected: `${action}_REJECTED`,
    requested: `${action}_REQUESTED`
})

const LOGIN = 'LOGIN';
export const loginAction = genericAction(LOGIN);


const LOGOUT = 'LOGOUT';
export const logoutAction = genericAction(LOGOUT);


// Admin Actions

const getAdmins = 'GET-ADMINS';
export const getAdminsAction = genericAction(getAdmins);

const createAdmins = 'CREATE-ADMINS';
export const createAdminAction = genericAction(createAdmins);

const editAdmins = 'EDIT-ADMINS';
export const editAdminAction = genericAction(editAdmins);

const deleteAdmins = 'DELETE-ADMINS';
export const deleteAdminAction = genericAction(deleteAdmins);


// Student Actions

const getStudents = 'GET-STUDENTS';
export const getStudentsAction = genericAction(getStudents);

const createStudent = 'CREATE-STUDENT';
export const createStudentAction = genericAction(createStudent);

const editStudent = 'EDIT-STUDENT';
export const editStudentAction = genericAction(editStudent);

const deleteStudent = 'DELETE-STUDENT';
export const deleteStudentAction = genericAction(deleteStudent);


// Grades Actions

const getGrades = 'GET-GRADES';
export const getGradesAction = genericAction(getGrades);



// Slider Actions

const getSliderItems = 'GET-SLIDER-ITEM';
export const getSliderItemsAction = genericAction(getSliderItems);

const createSliderItem = 'CREATE-SLIDER-ITEM';
export const createSliderItemAction = genericAction(createSliderItem);

const editSliderItem = 'EDIT-SLIDER-ITEM';
export const editSliderItemAction = genericAction(editSliderItem);

const deleteSliderItem = 'DELETE-SLIDER-ITEM';
export const deleteSliderItemAction = genericAction(deleteSliderItem);


// ABOUT Actions

const getAbout = 'GET-ABOUT';
export const getAboutAction = genericAction(getAbout);

const createAbout = 'CREATE-ABOUT';
export const createAboutAction = genericAction(createAbout);

const editAbout = 'EDIT-ABOUT';
export const editAboutAction = genericAction(editAbout);

const deleteAbout = 'DELETE-ABOUT';
export const deleteAboutAction = genericAction(deleteAbout);



// Testimonial Actions

const getTestimonials = 'GET-Testimonials';
export const getTestimonialsAction = genericAction(getTestimonials);

const createTestimonial = 'CREATE-Testimonial';
export const createTestimonialAction = genericAction(createTestimonial);

const editTestimonial = 'EDIT-Testimonial';
export const editTestimonialAction = genericAction(editTestimonial);

const deleteTestimonial = 'DELETE-Testimonial';
export const deleteTestimonialAction = genericAction(deleteTestimonial);


// Gallery Actions

const getGalleryImages = 'GET-GALLERY-IMAGES';
export const getGalleryImagesAction = genericAction(getGalleryImages);

const createGalleryImage = 'CREATE-GALLERY-IMAGES';
export const createGalleryImageAction = genericAction(createGalleryImage);

const editGalleryImage = 'EDIT-GALLERY-IMAGES';
export const editGalleryImageAction = genericAction(editGalleryImage);

const deleteGalleryImage = 'DELETE-GALLERY-IMAGES';
export const deleteGalleryImageAction = genericAction(deleteGalleryImage);


// Blog posts Actions

const getBlogPosts = 'GET-BLOG-POST';
export const getBlogPostsAction = genericAction(getBlogPosts);

const createBlogPost = 'CREATE-BLOG-POST';
export const createBlogPostAction = genericAction(createBlogPost);

const editBlogPost = 'EDIT-BLOG-POST';
export const editBlogPostAction = genericAction(editBlogPost);

const deleteBlogPost = 'DELETE-BLOG-POST';
export const deleteBlogPostAction = genericAction(deleteBlogPost);



// Contact Actions

const getContacts = 'GET-CONTACTS';
export const getContactsAction = genericAction(getContacts);

const createContact = 'CREATE-CONTACT';
export const createContactAction = genericAction(createContact);

const deleteContact = 'DELETE-CONTACT';
export const deleteContactAction = genericAction(deleteContact);