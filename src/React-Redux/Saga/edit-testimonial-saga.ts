import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editTestimonialAction } from "../Actions";
import { editTestimonialAPI } from "../../Axios/edit-testimonial";
import { selectToken } from "../../helper";
import { editTestimonialSucceeded , editTestimonialFailed  , editTestimonial} from "../Actions/testimonial-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editTestimonial);

function* editTestimonialSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editTestimonialAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editTestimonialSucceeded(res.data.data));
    } catch (e) {
        yield put(editTestimonialFailed(e));
    } 
}

export function* watchEditTestimonialSaga() {
    yield takeLatest(editTestimonialAction.requested, editTestimonialSaga);
}
