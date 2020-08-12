import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createBlogPostAction } from "../Actions";
import { createBlogPostAPI } from "../../Axios/create-blog-post";
import { selectToken } from "../../helper";
import { createBlogPostSucceeded , createBlogPostFailed  , createBlogPost} from "../Actions/blog-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createBlogPost);

function* createBlogPostSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createBlogPostAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createBlogPostSucceeded(res.data.data));
    } catch (e) {
        yield put(createBlogPostFailed(e));
    } 
}

export function* watchCreateBlogPostSaga() {
    yield takeLatest(createBlogPostAction.requested, createBlogPostSaga);
}
