import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteStudentAction } from "../Actions";
import { deleteStudentAPI } from "../../Axios/delete-student";
import { selectToken } from "../../helper";
import { deleteStudentSucceeded , deleteStudentFailed  , deleteStudent} from "../Actions/student-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteStudent);

function* deleteStudentSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteStudentAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteStudentSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteStudentFailed(e));
    } 
}

export function* watchDeleteStudentSagaSaga() {
    yield takeLatest(deleteStudentAction.requested, deleteStudentSaga);
}
