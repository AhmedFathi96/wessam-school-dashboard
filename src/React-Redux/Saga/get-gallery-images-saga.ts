import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getGalleryImagesAction } from "../Actions";
import { getGalleryImage } from "../../Axios/get-gallery-images";
import { selectToken } from "../../helper";
import { getGalleryImageSucceeded , getGalleryImageFailed } from "../Actions/gallery-action";
// import { saveToLocalStorage } from "../Reducers";

function* getGalleryImageSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getGalleryImage, token);
        console.log('===>' , res.data.data)
        yield put(getGalleryImageSucceeded(res.data.data));
    } catch (e) {
        yield put(getGalleryImageFailed(e));
    } 
}

export function* watchGetGalleryImageSaga() {
    yield takeLatest(getGalleryImagesAction.requested, getGalleryImageSaga);
}
