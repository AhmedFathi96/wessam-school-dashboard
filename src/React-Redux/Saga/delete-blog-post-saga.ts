import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteBlogPostAction } from "../Actions";
import { deleteBlogPostAPI } from "../../Axios/delete-blog-post";
import { selectToken } from "../../helper";
import { deleteBlogPostSucceeded , deleteBlogPostFailed  , deleteBlogPost} from "../Actions/blog-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteBlogPost);

function* deleteBlogPostSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteBlogPostAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteBlogPostSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteBlogPostFailed(e));
    } 
}

export function* watchDeleteBlogPostSaga() {
    yield takeLatest(deleteBlogPostAction.requested, deleteBlogPostSaga);
}
