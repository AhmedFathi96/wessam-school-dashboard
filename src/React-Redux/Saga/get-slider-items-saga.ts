import { call, put, takeLatest, select  } from "redux-saga/effects";
import { getSliderItemsAction } from "../Actions";
import { getSliderItems } from "../../Axios/get-slider-items";
import { selectToken } from "../../helper";
import { getSliderItemsSucceeded , getSliderItemsFailed } from "../Actions/slider-action";
// import { saveToLocalStorage } from "../Reducers";

function* getSliderItemsSaga() {

    try {
        const token = yield select(selectToken);
        const res = yield call(getSliderItems, token);
        console.log('===>' , res.data.data)
        yield put(getSliderItemsSucceeded(res.data.data));
    } catch (e) {
        yield put(getSliderItemsFailed(e));
    } 
}

export function* watchGetSliderItemsSaga() {
    yield takeLatest(getSliderItemsAction.requested, getSliderItemsSaga);
}
