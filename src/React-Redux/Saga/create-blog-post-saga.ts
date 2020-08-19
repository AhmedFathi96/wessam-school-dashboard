import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createBlogPostAction } from "../Actions";
import { createBlogPostAPI } from "../../Axios/create-blog-post";
import { selectToken } from "../../helper";
import { createBlogPostSucceeded , createBlogPostFailed  , createBlogPost} from "../Actions/blog-action";
import { store } from 'react-notifications-component';

const actionType = union(createBlogPost);

function* createBlogPostSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createBlogPostAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createBlogPostSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "blog section added successfully",
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
        yield put(createBlogPostFailed(e));
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

export function* watchCreateBlogPostSaga() {
    yield takeLatest(createBlogPostAction.requested, createBlogPostSaga);
}
