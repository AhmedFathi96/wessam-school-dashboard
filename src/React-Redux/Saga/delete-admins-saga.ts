import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteAdminAction } from "../Actions";
import { deleteAdminAPI } from "../../Axios/delete-admin";
import { selectToken } from "../../helper";
import { deleteAdminSucceeded , deleteAdminFailed  , deleteAdmin} from "../Actions/admin-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteAdmin);

function* deleteAdminSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteAdminAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteAdminSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteAdminFailed(e));
    } 
}

export function* watchDeleteAdminSagaSaga() {
    yield takeLatest(deleteAdminAction.requested, deleteAdminSaga);
}
