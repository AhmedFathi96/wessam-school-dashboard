import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteTestimonialAction } from "../Actions";
import { deleteTestimonialAPI } from "../../Axios/delete-testimonial";
import { selectToken } from "../../helper";
import { deleteTestimonialSucceeded , deleteTestimonialFailed  , deleteTestimonial} from "../Actions/testimonial-action";
import { store } from 'react-notifications-component';

const actionType = union(deleteTestimonial);

function* deleteTestimonialSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteTestimonialAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteTestimonialSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "testimonial deleted successfully",
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
        yield put(deleteTestimonialFailed(e));
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

export function* watchDeleteTestimonialSaga() {
    yield takeLatest(deleteTestimonialAction.requested, deleteTestimonialSaga);
}
