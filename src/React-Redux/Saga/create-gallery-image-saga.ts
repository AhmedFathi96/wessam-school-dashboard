import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createGalleryImageAction } from "../Actions";
import { createGalleryImageAPI } from "../../Axios/create-gallery-image";
import { selectToken } from "../../helper";
import { createGalleryImageSucceeded , createGalleryImageFailed  , createGalleryImage} from "../Actions/gallery-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createGalleryImage);

function* createGalleryImageSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        console.log('===>' , action.payload)
        const res = yield call(createGalleryImageAPI, token , action.payload);
        yield put(createGalleryImageSucceeded(res.data.data));
    } catch (e) {
        yield put(createGalleryImageFailed(e));
    } 
}

export function* watchCreateGalleryImageSaga() {
    yield takeLatest(createGalleryImageAction.requested, createGalleryImageSaga);
}
