import { all } from "redux-saga/effects";
import { watchLoginSaga } from "./login-saga";
import { watchGetAdminsSagaSaga } from "./get-admins-saga";
import { watchCreateAdminSagaSaga } from "./create-admin-saga";
import { watchEditAdminSagaSaga } from './edit-admin-saga';
import { watchDeleteAdminSagaSaga } from "./delete-admins-saga";
import { watchCreateStudentSagaSaga } from "./create-student-saga";
import { watchDeleteStudentSagaSaga } from "./delete-student-saga";
import { watchEditStudentSagaSaga } from "./edit-student-saga";
import { watchGetStudentsSagaSaga } from "./get-students-saga";
import { watchCreateSliderItemSaga } from "./create-slider-item-saga";
import { watchEditSliderItemSaga } from "./edit-slider-item-saga";
import { watchDeleteSliderItemSaga } from "./delete-slider-item-saga";
import { watchGetSliderItemsSaga } from "./get-slider-items-saga";
import { watchCreateAboutSaga } from "./create-about-saga";
import { watchDeleteAboutSaga } from "./delete-about-saga";
import { watchEditAboutSaga } from "./edit-about-saga";
import { watchGetAboutSaga } from "./get-about-saga";
import { watchCreateTestimonialSaga } from "./create-testimonial-saga";
import { watchEditTestimonialSaga } from "./edit-testimonial-saga";
import { watchDeleteTestimonialSaga } from "./delete-testimonial-saga";
import { watchGetTestimonialsSaga } from "./get-testimonials-saga";
import { watchDeleteGalleryImageSaga } from "./delete-gallery-image-saga";
import { watchCreateGalleryImageSaga } from "./create-gallery-image-saga";
import { watchEditGalleryImageSaga } from "./edit-gallery-image-saga";
import { watchGetGalleryImageSaga } from "./get-gallery-images-saga";
import { watchCreateBlogPostSaga } from "./create-blog-post-saga";
import { watchDeleteBlogPostSaga } from "./delete-blog-post-saga";
import { watchGetBlogPostsSaga } from "./get-blog-posts-saga";
import { watchEditBlogPostSaga } from "./edit-blog-post-saga";
import { watchCreateContactSagaSaga } from "./create-contact-saga";
import { watchDeleteContactSagaSaga } from "./delete-contact-saga";
import { watchGetContactsSagaSaga } from "./get-contacts-saga";


export default function* rootSaga() {
    yield all([
        watchLoginSaga(),
        watchGetAdminsSagaSaga(),
        watchCreateAdminSagaSaga(),
        watchEditAdminSagaSaga(),
        watchDeleteAdminSagaSaga(),
        watchCreateStudentSagaSaga(),
        watchDeleteStudentSagaSaga(),
        watchEditStudentSagaSaga(),
        watchGetStudentsSagaSaga(),
        watchCreateSliderItemSaga(),
        watchEditSliderItemSaga(),
        watchDeleteSliderItemSaga(),
        watchGetSliderItemsSaga(),
        watchCreateAboutSaga(),
        watchDeleteAboutSaga(),
        watchEditAboutSaga(),
        watchGetAboutSaga(),
        watchCreateTestimonialSaga(),
        watchEditTestimonialSaga(),
        watchDeleteTestimonialSaga(),
        watchGetTestimonialsSaga(),
        watchCreateGalleryImageSaga(),
        watchEditGalleryImageSaga(),
        watchDeleteGalleryImageSaga(),
        watchGetGalleryImageSaga(),
        watchEditBlogPostSaga(),
        watchDeleteBlogPostSaga(),
        watchCreateBlogPostSaga(),
        watchGetBlogPostsSaga(),
        watchCreateContactSagaSaga(),
        watchDeleteContactSagaSaga(),
        watchGetContactsSagaSaga()
    ]);
}
