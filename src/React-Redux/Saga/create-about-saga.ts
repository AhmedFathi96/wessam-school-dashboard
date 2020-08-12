import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createAboutAction } from "../Actions";
import { createAboutAPI } from "../../Axios/create-about";
import { selectToken } from "../../helper";
import { createAboutSucceeded , createAboutFailed  , createAbout} from "../Actions/about-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createAbout);

function* createAboutSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createAboutAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createAboutSucceeded(res.data.data));
    } catch (e) {
        yield put(createAboutFailed(e));
    } 
}

export function* watchCreateAboutSaga() {
    yield takeLatest(createAboutAction.requested, createAboutSaga);
}
