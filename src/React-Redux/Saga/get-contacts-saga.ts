import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getContactsAction } from "../Actions";
import { getContacts } from "../../Axios/get-contacts";
import { selectToken } from "../../helper";
import { getContactsSucceeded , getContactsFailed } from "../Actions/contact-action";
// import { saveToLocalStorage } from "../Reducers";

function* getContactsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getContacts, token);
        console.log('===>' , res.data.data)
        yield put(getContactsSucceeded(res.data.data));
    } catch (e) {
        yield put(getContactsFailed(e));
    } 
}

export function* watchGetContactsSagaSaga() {
    yield takeLatest(getContactsAction.requested, getContactsSaga);
}
