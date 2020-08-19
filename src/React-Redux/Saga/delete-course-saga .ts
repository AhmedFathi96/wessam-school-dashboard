import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteCourseAction } from "../Actions";
import { deleteCourseAPI } from "../../Axios/delete-course";
import { selectToken } from "../../helper";
import { deleteCourseSucceeded , deleteCourseFailed  , deleteCourse} from "../Actions/courses-action";
import { store } from 'react-notifications-component';

const actionType = union(deleteCourse);

function* deleteCourseSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteCourseAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteCourseSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "course added successfully",
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
        yield put(deleteCourseFailed(e));
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

export function* watchDeleteCourseSagaSaga() {
    yield takeLatest(deleteCourseAction.requested, deleteCourseSaga);
}
