import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createStudentAction } from "../Actions";
import { createStudentAPI } from "../../Axios/create-student";
import { selectToken } from "../../helper";
import { createStudentSucceeded , createStudentFailed  , createStudent} from "../Actions/student-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createStudent);

function* createStudentSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createStudentAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createStudentSucceeded(res.data.data));
    } catch (e) {
        yield put(createStudentFailed(e));
    } 
}

export function* watchCreateStudentSagaSaga() {
    yield takeLatest(createStudentAction.requested, createStudentSaga);
}
