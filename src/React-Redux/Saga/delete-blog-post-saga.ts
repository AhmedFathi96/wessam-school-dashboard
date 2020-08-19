import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteBlogPostAction } from "../Actions";
import { deleteBlogPostAPI } from "../../Axios/delete-blog-post";
import { selectToken } from "../../helper";
import { deleteBlogPostSucceeded , deleteBlogPostFailed  , deleteBlogPost} from "../Actions/blog-action";
import { store } from 'react-notifications-component';

const actionType = union(deleteBlogPost);

function* deleteBlogPostSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteBlogPostAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteBlogPostSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "blog post added successfully",
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
        yield put(deleteBlogPostFailed(e));
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

export function* watchDeleteBlogPostSaga() {
    yield takeLatest(deleteBlogPostAction.requested, deleteBlogPostSaga);
}
