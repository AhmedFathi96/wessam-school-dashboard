import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getStudentsAction } from "../Actions";
import { getStudents } from "../../Axios/get-students";
import { selectToken } from "../../helper";
import { getStudentsSucceeded , getStudentsFailed } from "../Actions/student-action";
import { store } from 'react-notifications-component';
function* getStudentsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getStudents, token);
        console.log('===>' , res.data.data)
        yield put(getStudentsSucceeded(res.data.data));
    } catch (e) {
        yield put(getStudentsFailed(e));
        store.addNotification({
            title: "Error Message!",
            message: "Something went wrong",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    } 
}

export function* watchGetStudentsSagaSaga() {
    yield takeLatest(getStudentsAction.requested, getStudentsSaga);
}
