import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createAdminAction } from "../Actions";
import { createAdminAPI } from "../../Axios/create-admin";
import { selectToken } from "../../helper";
import { createAdminSucceeded , createAdminFailed  , createAdmin} from "../Actions/admin-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createAdmin);

function* createAdminSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createAdminAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createAdminSucceeded(res.data.data));
    } catch (e) {
        yield put(createAdminFailed(e));
    } 
}

export function* watchCreateAdminSagaSaga() {
    yield takeLatest(createAdminAction.requested, createAdminSaga);
}
