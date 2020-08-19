import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editStudentAction } from "../Actions";
import { editStudentAPI } from "../../Axios/edit-student";
import { selectToken } from "../../helper";
import { editStudentSucceeded , editStudentFailed  , editStudent} from "../Actions/student-action";
import { store } from 'react-notifications-component';

const actionType = union(editStudent);

function* editStudentSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editStudentAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editStudentSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "student edited successfully",
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
        yield put(editStudentFailed(e));
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

export function* watchEditStudentSagaSaga() {
    yield takeLatest(editStudentAction.requested, editStudentSaga);
}
