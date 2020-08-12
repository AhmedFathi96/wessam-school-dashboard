import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createContactAction } from "../Actions";
import { createContactAPI } from "../../Axios/create-contact";
import { selectToken } from "../../helper";
import { createContactSucceeded , createContactFailed  , createContact} from "../Actions/contact-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createContact);

function* createContactSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createContactAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createContactSucceeded(res.data.data));
    } catch (e) {
        yield put(createContactFailed(e));
    } 
}

export function* watchCreateContactSagaSaga() {
    yield takeLatest(createContactAction.requested, createContactSaga);
}
