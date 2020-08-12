import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getAdminsAction } from "../Actions";
import { getAdmins } from "../../Axios/get-admins";
import { selectToken } from "../../helper";
import { getAdminsSucceeded , getAdminsFailed } from "../Actions/admin-action";
// import { saveToLocalStorage } from "../Reducers";

function* getAdminsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getAdmins, token);
        console.log('===>' , res.data.data)
        yield put(getAdminsSucceeded(res.data.data));
    } catch (e) {
        yield put(getAdminsFailed(e));
    } 
}

export function* watchGetAdminsSagaSaga() {
    yield takeLatest(getAdminsAction.requested, getAdminsSaga);
}
