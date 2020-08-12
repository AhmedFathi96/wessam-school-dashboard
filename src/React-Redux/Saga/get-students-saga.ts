import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getStudentsAction } from "../Actions";
import { getStudents } from "../../Axios/get-students";
import { selectToken } from "../../helper";
import { getStudentsSucceeded , getStudentsFailed } from "../Actions/student-action";
// import { saveToLocalStorage } from "../Reducers";

function* getStudentsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getStudents, token);
        console.log('===>' , res.data.data)
        yield put(getStudentsSucceeded(res.data.data));
    } catch (e) {
        yield put(getStudentsFailed(e));
    } 
}

export function* watchGetStudentsSagaSaga() {
    yield takeLatest(getStudentsAction.requested, getStudentsSaga);
}
