import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createAdminAction } from "../Actions";
import { createAdminAPI } from "../../Axios/create-admin";
import { selectToken } from "../../helper";
import { createAdminSucceeded , createAdminFailed  , createAdmin} from "../Actions/admin-action";
import { store } from 'react-notifications-component';

const actionType = union(createAdmin);

function* createAdminSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createAdminAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createAdminSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "Admin added successfully",
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
        yield put(createAdminFailed(e));
        store.addNotification({
            title: "Error Message!",
            message: `Error happened ${e}`,
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

export function* watchCreateAdminSagaSaga() {
    yield takeLatest(createAdminAction.requested, createAdminSaga);
}
