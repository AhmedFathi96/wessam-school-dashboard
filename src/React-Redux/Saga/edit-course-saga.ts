import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editCourseAction } from "../Actions";
import { editCourseAPI } from "../../Axios/edit-course";
import { selectToken } from "../../helper";
import { editCourse ,editCourseFailed , editCourseSucceeded  } from "../Actions/courses-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editCourse);

function* editCourseSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editCourseAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editCourseSucceeded(res.data.data));
    } catch (e) {
        yield put(editCourseFailed(e));
    } 
}

export function* watchEditCourseSagaSaga() {
    yield takeLatest(editCourseAction.requested, editCourseSaga);
}
