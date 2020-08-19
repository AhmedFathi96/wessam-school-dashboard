import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editCourseAction } from "../Actions";
import { editCourseAPI } from "../../Axios/edit-course";
import { selectToken } from "../../helper";
import { editCourse ,editCourseFailed , editCourseSucceeded  } from "../Actions/courses-action";
import { store } from 'react-notifications-component';

const actionType = union(editCourse);

function* editCourseSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editCourseAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editCourseSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "course edited successfully",
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
        yield put(editCourseFailed(e));
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

export function* watchEditCourseSagaSaga() {
    yield takeLatest(editCourseAction.requested, editCourseSaga);
}
