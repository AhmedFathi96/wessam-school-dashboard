import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteStudentAction } from "../Actions";
import { deleteStudentAPI } from "../../Axios/delete-student";
import { selectToken } from "../../helper";
import { deleteStudentSucceeded , deleteStudentFailed  , deleteStudent} from "../Actions/student-action";
import { store } from 'react-notifications-component';

const actionType = union(deleteStudent);

function* deleteStudentSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteStudentAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteStudentSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "student deleted successfully",
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
        yield put(deleteStudentFailed(e));
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

export function* watchDeleteStudentSagaSaga() {
    yield takeLatest(deleteStudentAction.requested, deleteStudentSaga);
}
