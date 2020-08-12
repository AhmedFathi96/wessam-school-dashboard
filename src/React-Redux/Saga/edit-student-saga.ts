import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editStudentAction } from "../Actions";
import { editStudentAPI } from "../../Axios/edit-student";
import { selectToken } from "../../helper";
import { editStudentSucceeded , editStudentFailed  , editStudent} from "../Actions/student-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editStudent);

function* editStudentSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editStudentAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editStudentSucceeded(res.data.data));
    } catch (e) {
        yield put(editStudentFailed(e));
    } 
}

export function* watchEditStudentSagaSaga() {
    yield takeLatest(editStudentAction.requested, editStudentSaga);
}
