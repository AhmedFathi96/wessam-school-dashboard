import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getCoursesAction } from "../Actions";
import { getCourses } from "../../Axios/get-courses";
import { selectToken } from "../../helper";
import { getCoursesSucceeded , getCoursesFailed } from "../Actions/courses-action";
// import { saveToLocalStorage } from "../Reducers";

function* getCoursesSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getCourses, token);
        console.log('===>' , res.data.data)
        yield put(getCoursesSucceeded(res.data.data));
    } catch (e) {
        yield put(getCoursesFailed(e));
    } 
}

export function* watchGetCoursesSagaSaga() {
    yield takeLatest(getCoursesAction.requested, getCoursesSaga);
}
