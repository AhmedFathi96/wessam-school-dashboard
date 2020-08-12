import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editBlogPostAction } from "../Actions";
import { editBlogPostAPI } from "../../Axios/edit-blog-post";
import { selectToken } from "../../helper";
import { editBlogPostSucceeded , editBlogPostFailed  , editBlogPost} from "../Actions/blog-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editBlogPost);

function* editBlogPostSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editBlogPostAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editBlogPostSucceeded(res.data.data));
    } catch (e) {
        yield put(editBlogPostFailed(e));
    } 
}

export function* watchEditBlogPostSaga() {
    yield takeLatest(editBlogPostAction.requested, editBlogPostSaga);
}
