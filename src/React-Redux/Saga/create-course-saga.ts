import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createCourseAction } from "../Actions";
import { createCourseAPI } from "../../Axios/create-course";
import { selectToken } from "../../helper";
import { createCourseSucceeded , createCourseFailed, createCourse} from "../Actions/courses-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createCourse);

function* createCourseSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createCourseAPI, token , action.payload);
        yield put(createCourseSucceeded(res.data.data));
    } catch (e) {
        yield put(createCourseFailed(e));
    } 
}

export function* watchCreateCourseSagaSaga() {
    yield takeLatest(createCourseAction.requested, createCourseSaga);
}
