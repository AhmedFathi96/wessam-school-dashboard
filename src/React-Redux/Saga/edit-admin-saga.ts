import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editAdminAction } from "../Actions";
import { editAdminAPI } from "../../Axios/edit-admin";
import { selectToken } from "../../helper";
import { editAdminSucceeded , editAdminFailed  , editAdmin} from "../Actions/admin-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editAdmin);

function* editAdminSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editAdminAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editAdminSucceeded(res.data.data));
    } catch (e) {
        yield put(editAdminFailed(e));
    } 
}

export function* watchEditAdminSagaSaga() {
    yield takeLatest(editAdminAction.requested, editAdminSaga);
}
