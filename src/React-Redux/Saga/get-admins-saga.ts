import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getAdminsAction } from "../Actions";
import { getAdmins } from "../../Axios/get-admins";
import { selectToken } from "../../helper";
import { getAdminsSucceeded , getAdminsFailed } from "../Actions/admin-action";
import { store } from 'react-notifications-component';
function* getAdminsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getAdmins, token);
        console.log('===>' , res.data.data)
        yield put(getAdminsSucceeded(res.data.data));
    } catch (e) {
        yield put(getAdminsFailed(e));
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

export function* watchGetAdminsSagaSaga() {
    yield takeLatest(getAdminsAction.requested, getAdminsSaga);
}
