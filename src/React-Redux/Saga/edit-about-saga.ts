import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editAboutAction } from "../Actions";
import { editAboutAPI } from "../../Axios/edit-about";
import { selectToken } from "../../helper";
import { editAboutSucceeded , editAboutFailed  , editAbout} from "../Actions/about-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editAbout);

function* editAboutSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editAboutAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editAboutSucceeded(res.data.data));
    } catch (e) {
        yield put(editAboutFailed(e));
    } 
}

export function* watchEditAboutSaga() {
    yield takeLatest(editAboutAction.requested, editAboutSaga);
}
