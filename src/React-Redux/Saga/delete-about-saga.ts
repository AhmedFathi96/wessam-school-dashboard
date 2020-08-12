import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteAboutAction } from "../Actions";
import { deleteAboutAPI } from "../../Axios/delete-about";
import { selectToken } from "../../helper";
import { deleteAboutSucceeded , deleteAboutFailed  , deleteAbout} from "../Actions/about-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteAbout);

function* deleteAboutSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteAboutAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteAboutSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteAboutFailed(e));
    } 
}

export function* watchDeleteAboutSaga() {
    yield takeLatest(deleteAboutAction.requested, deleteAboutSaga);
}
