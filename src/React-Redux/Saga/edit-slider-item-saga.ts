import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { editSliderItemAction } from "../Actions";
import { editSliderItemAPI } from "../../Axios/edit-slider-item";
import { selectToken } from "../../helper";
import { editSliderItemSucceeded , editSliderItemFailed  , editSliderItem} from "../Actions/slider-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(editSliderItem);

function* editSliderItemSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(editSliderItemAPI, token , action.payload.data,action.payload.id);
        console.log('===>' , res.data.data)
        yield put(editSliderItemSucceeded(res.data.data));
    } catch (e) {
        yield put(editSliderItemFailed(e));
    } 
}

export function* watchEditSliderItemSaga() {
    yield takeLatest(editSliderItemAction.requested, editSliderItemSaga);
}
