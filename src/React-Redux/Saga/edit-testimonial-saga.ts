import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editTestimonialAction } from "../Actions";
import { editTestimonialAPI } from "../../Axios/edit-testimonial";
import { selectToken } from "../../helper";
import { editTestimonialSucceeded , editTestimonialFailed  , editTestimonial} from "../Actions/testimonial-action";
import { store } from 'react-notifications-component';

const actionType = union(editTestimonial);

function* editTestimonialSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editTestimonialAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editTestimonialSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "testimonial edited successfully",
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
        yield put(editTestimonialFailed(e));
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

export function* watchEditTestimonialSaga() {
    yield takeLatest(editTestimonialAction.requested, editTestimonialSaga);
}
