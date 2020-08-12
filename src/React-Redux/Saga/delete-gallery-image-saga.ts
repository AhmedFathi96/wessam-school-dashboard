import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteGalleryImageAction } from "../Actions";
import { deleteGalleryImageAPI } from "../../Axios/delete-gallery-image";
import { selectToken } from "../../helper";
import { deleteGalleryImageSucceeded , deleteGalleryImageFailed  , deleteGalleryImage} from "../Actions/gallery-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteGalleryImage);

function* deleteGalleryImageSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteGalleryImageAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteGalleryImageSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteGalleryImageFailed(e));
    } 
}

export function* watchDeleteGalleryImageSaga() {
    yield takeLatest(deleteGalleryImageAction.requested, deleteGalleryImageSaga);
}
