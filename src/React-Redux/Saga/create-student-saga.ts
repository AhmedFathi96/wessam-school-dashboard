import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createStudentAction } from "../Actions";
import { createStudentAPI } from "../../Axios/create-student";
import { selectToken } from "../../helper";
import { createStudentSucceeded , createStudentFailed  , createStudent} from "../Actions/student-action";
import { store } from 'react-notifications-component';

const actionType = union(createStudent);

function* createStudentSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createStudentAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createStudentSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "student added successfully",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    } catch (e) {
        yield put(createStudentFailed(e));
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

export function* watchCreateStudentSagaSaga() {
    yield takeLatest(createStudentAction.requested, createStudentSaga);
}
