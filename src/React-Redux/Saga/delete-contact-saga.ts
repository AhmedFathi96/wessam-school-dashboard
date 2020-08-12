import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteContactAction } from "../Actions";
import { deleteContactAPI } from "../../Axios/delete-contact";
import { selectToken } from "../../helper";
import { deleteContactSucceeded , deleteContactFailed  , deleteContact} from "../Actions/contact-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteContact);

function* deleteContactSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteContactAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteContactSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteContactFailed(e));
    } 
}

export function* watchDeleteContactSagaSaga() {
    yield takeLatest(deleteContactAction.requested, deleteContactSaga);
}
