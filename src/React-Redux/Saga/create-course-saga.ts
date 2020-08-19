import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createCourseAction } from "../Actions";
import { createCourseAPI } from "../../Axios/create-course";
import { selectToken } from "../../helper";
import { createCourseSucceeded , createCourseFailed, createCourse} from "../Actions/courses-action";
import { store } from 'react-notifications-component';

const actionType = union(createCourse);

function* createCourseSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createCourseAPI, token , action.payload);
        yield put(createCourseSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "course section added successfully",
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
        yield put(createCourseFailed(e));
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

export function* watchCreateCourseSagaSaga() {
    yield takeLatest(createCourseAction.requested, createCourseSaga);
}
