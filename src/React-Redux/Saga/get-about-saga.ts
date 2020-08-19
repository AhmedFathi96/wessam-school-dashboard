import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getAboutAction } from "../Actions";
import { getAbout } from "../../Axios/get-about";
import { selectToken } from "../../helper";
import { getAboutSucceeded , getAboutFailed } from "../Actions/about-action";
import { store } from 'react-notifications-component';
function* getAboutSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getAbout, token);
        console.log('===>' , res.data.data)
        yield put(getAboutSucceeded(res.data.data));
    } catch (e) {
        yield put(getAboutFailed(e));
    } 
}

export function* watchGetAboutSaga() {
    yield takeLatest(getAboutAction.requested, getAboutSaga);
}
