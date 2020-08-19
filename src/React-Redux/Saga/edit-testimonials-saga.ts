import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editTestimonialPageHeaderAction } from "../Actions";
import { editTestimonialsAPI } from "../../Axios/edit-page-headers";
import { selectToken } from "../../helper";
import { editTestimonialPageHeader , editTestimonialPageHeaderFailed, editTestimonialPageHeaderSucceeded } from "../Actions/pages-headers-action";
import { store } from 'react-notifications-component';

const actionType = union(editTestimonialPageHeader);

function* editTestimonialSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editTestimonialsAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editTestimonialPageHeaderSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "Testimonial edited successfully",
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
        yield put(editTestimonialPageHeaderFailed(e));
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

export function* watchEditTestimonialsSaga() {
    yield takeLatest(editTestimonialPageHeaderAction.requested, editTestimonialSaga);
}
