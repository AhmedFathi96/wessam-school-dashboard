import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getTestimonialsAction } from "../Actions";
import { getTestimonials } from "../../Axios/get-testimonials";
import { selectToken } from "../../helper";
import { getTestimonialsSucceeded , getTestimonialsFailed } from "../Actions/testimonial-action";
import { store } from 'react-notifications-component';
function* getTestimonialsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getTestimonials, token);
        console.log('===>' , res.data.data)
        yield put(getTestimonialsSucceeded(res.data.data));
    } catch (e) {
        yield put(getTestimonialsFailed(e));
        store.addNotification({
            title: "Error Message!",
            message: "Something went wrong",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    } 
}

export function* watchGetTestimonialsSaga() {
    yield takeLatest(getTestimonialsAction.requested, getTestimonialsSaga);
}
