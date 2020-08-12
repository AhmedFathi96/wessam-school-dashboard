import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { deleteSliderItemAction } from "../Actions";
import { deleteSliderItemAPI } from "../../Axios/delete-slider-item";
import { selectToken } from "../../helper";
import { deleteSliderItemSucceeded , deleteSliderItemFailed  , deleteSliderItem} from "../Actions/slider-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(deleteSliderItem);

function* deleteSliderItemSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(deleteSliderItemAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(deleteSliderItemSucceeded(res.data.data));
    } catch (e) {
        yield put(deleteSliderItemFailed(e));
    } 
}

export function* watchDeleteSliderItemSaga() {
    yield takeLatest(deleteSliderItemAction.requested, deleteSliderItemSaga);
}
