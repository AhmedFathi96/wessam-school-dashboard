import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editGalleryImageAction } from "../Actions";
import { editGalleryImageAPI } from "../../Axios/edit-gallery-image";
import { selectToken } from "../../helper";
import { editGalleryImageSucceeded , editGalleryImageFailed  , editGalleryImage} from "../Actions/gallery-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editGalleryImage);

function* editGalleryImageSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editGalleryImageAPI, token , action.payload.data,action.payload.id);
        yield put(editGalleryImageSucceeded(res.data.data));
    } catch (e) {
        yield put(editGalleryImageFailed(e));
    } 
}

export function* watchEditGalleryImageSaga() {
    yield takeLatest(editGalleryImageAction.requested, editGalleryImageSaga);
}
