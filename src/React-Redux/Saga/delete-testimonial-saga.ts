import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteTestimonialAction } from "../Actions";
import { deleteTestimonialAPI } from "../../Axios/delete-testimonial";
import { selectToken } from "../../helper";
import { deleteTestimonialSucceeded , deleteTestimonialFailed  , deleteTestimonial} from "../Actions/testimonial-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteTestimonial);

function* deleteTestimonialSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteTestimonialAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteTestimonialSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteTestimonialFailed(e));
    } 
}

export function* watchDeleteTestimonialSaga() {
    yield takeLatest(deleteTestimonialAction.requested, deleteTestimonialSaga);
}
