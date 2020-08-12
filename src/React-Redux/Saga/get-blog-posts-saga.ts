import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getBlogPostsAction } from "../Actions";
import { getBlogPosts } from "../../Axios/get-blog-posts";
import { selectToken } from "../../helper";
import { getBlogPostSucceeded , getBlogPostFailed } from "../Actions/blog-action";
// import { saveToLocalStorage } from "../Reducers";

function* getBlogPostsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getBlogPosts, token);
        console.log('===>' , res.data.data)
        yield put(getBlogPostSucceeded(res.data.data));
    } catch (e) {
        yield put(getBlogPostFailed(e));
    } 
}

export function* watchGetBlogPostsSaga() {
    yield takeLatest(getBlogPostsAction.requested, getBlogPostsSaga);
}
