import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getTestimonialsAction } from "../Actions";
import { getTestimonials } from "../../Axios/get-testimonials";
import { selectToken } from "../../helper";
import { getTestimonialsSucceeded , getTestimonialsFailed } from "../Actions/testimonial-action";
// import { saveToLocalStorage } from "../Reducers";

function* getTestimonialsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getTestimonials, token);
        console.log('===>' , res.data.data)
        yield put(getTestimonialsSucceeded(res.data.data));
    } catch (e) {
        yield put(getTestimonialsFailed(e));
    } 
}

export function* watchGetTestimonialsSaga() {
    yield takeLatest(getTestimonialsAction.requested, getTestimonialsSaga);
}
