import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getBlogPostsAction } from "../Actions";
import { getBlogPosts } from "../../Axios/get-blog-posts";
import { selectToken } from "../../helper";
import { getBlogPostSucceeded , getBlogPostFailed } from "../Actions/blog-action";
import { store } from 'react-notifications-component';
function* getBlogPostsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getBlogPosts, token);
        console.log('===>' , res.data.data)
        yield put(getBlogPostSucceeded(res.data.data));
    } catch (e) {
        yield put(getBlogPostFailed(e));
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

export function* watchGetBlogPostsSaga() {
    yield takeLatest(getBlogPostsAction.requested, getBlogPostsSaga);
}
