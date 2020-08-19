import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editBlogPostAction } from "../Actions";
import { editBlogPostAPI } from "../../Axios/edit-blog-post";
import { selectToken } from "../../helper";
import { editBlogPostSucceeded , editBlogPostFailed  , editBlogPost} from "../Actions/blog-action";
import { store } from 'react-notifications-component';

const actionType = union(editBlogPost);

function* editBlogPostSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editBlogPostAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editBlogPostSucceeded(res.data.data));
        store.addNotification({
            title: "Success Message!",
            message: "blog post edited successfully",
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
        yield put(editBlogPostFailed(e));
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

export function* watchEditBlogPostSaga() {
    yield takeLatest(editBlogPostAction.requested, editBlogPostSaga);
}
