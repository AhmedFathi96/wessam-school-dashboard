import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getCoursesAction } from "../Actions";
import { getCourses } from "../../Axios/get-courses";
import { selectToken } from "../../helper";
import { getCoursesSucceeded , getCoursesFailed } from "../Actions/courses-action";
import { store } from 'react-notifications-component';
function* getCoursesSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getCourses, token);
        console.log('===>' , res.data.data)
        yield put(getCoursesSucceeded(res.data.data));
    } catch (e) {
        yield put(getCoursesFailed(e));
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

export function* watchGetCoursesSagaSaga() {
    yield takeLatest(getCoursesAction.requested, getCoursesSaga);
}
