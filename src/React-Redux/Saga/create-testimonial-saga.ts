import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createTestimonialAction } from "../Actions";
import { createTestimonialAPI } from "../../Axios/create-testimonial";
import { selectToken } from "../../helper";
import { createTestimonialSucceeded , createTestimonialFailed  , createTestimonial} from "../Actions/testimonial-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createTestimonial);

function* createTestimonialSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createTestimonialAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createTestimonialSucceeded(res.data.data));
    } catch (e) {
        yield put(createTestimonialFailed(e));
    } 
}

export function* watchCreateTestimonialSaga() {
    yield takeLatest(createTestimonialAction.requested, createTestimonialSaga);
}
