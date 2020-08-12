import { union } from "ts-action";
import { call, put, takeLatest, select  } from "redux-saga/effects";
import { createSliderItemAction } from "../Actions";
import { createSliderItemAPI } from "../../Axios/create-slider-item";
import { selectToken } from "../../helper";
import { createSliderItemSucceeded , createSliderItemFailed  , createSliderItem} from "../Actions/slider-action";
// import { saveToLocalStorage } from "../Reducers";


const actionType = union(createSliderItem);

function* createSliderItemSaga(action: typeof actionType.actions) {
    try {
        const token = yield select(selectToken);
        const res = yield call(createSliderItemAPI, token , action.payload);
        console.log('===>' , res.data.data)
        yield put(createSliderItemSucceeded(res.data.data));
    } catch (e) {
        yield put(createSliderItemFailed(e));
    } 
}

export function* watchCreateSliderItemSaga() {
    yield takeLatest(createSliderItemAction.requested, createSliderItemSaga);
}
