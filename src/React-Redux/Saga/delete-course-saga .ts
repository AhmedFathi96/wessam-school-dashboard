import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteCourseAction } from "../Actions";
import { deleteCourseAPI } from "../../Axios/delete-course";
import { selectToken } from "../../helper";
import { deleteCourseSucceeded , deleteCourseFailed  , deleteCourse} from "../Actions/courses-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteCourse);

function* deleteCourseSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteCourseAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteCourseSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteCourseFailed(e));
    } 
}

export function* watchDeleteCourseSagaSaga() {
    yield takeLatest(deleteCourseAction.requested, deleteCourseSaga);
}
