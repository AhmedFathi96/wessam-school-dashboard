import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editCoursesPageHeaderAction } from "../Actions";
import { editCoursesAPI } from "../../Axios/edit-page-headers";
import { selectToken } from "../../helper";
import { editCoursesPageHeader , editCoursesPageHeaderFailed, editCoursesPageHeaderSucceeded } from "../Actions/pages-headers-action";
import { store } from 'react-notifications-component';

const actionType = union(editCoursesPageHeader);

function* editCoursesSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editCoursesAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editCoursesPageHeaderSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "Courses edited successfully",
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
        yield put(editCoursesPageHeaderFailed(e));
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

export function* watchEditCoursesSaga() {
    yield takeLatest(editCoursesPageHeaderAction.requested, editCoursesSaga);
}
