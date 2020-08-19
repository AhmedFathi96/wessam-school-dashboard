import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createTestimonialAction } from "../Actions";
import { createTestimonialAPI } from "../../Axios/create-testimonial";
import { selectToken } from "../../helper";
import { createTestimonialSucceeded , createTestimonialFailed  , createTestimonial} from "../Actions/testimonial-action";
import { store } from 'react-notifications-component';

const actionType = union(createTestimonial);

function* createTestimonialSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createTestimonialAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createTestimonialSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "testimonial added successfully",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    } catch (e) {
        yield put(createTestimonialFailed(e));
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

export function* watchCreateTestimonialSaga() {
    yield takeLatest(createTestimonialAction.requested, createTestimonialSaga);
}
