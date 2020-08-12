import { reducer, on } from "ts-action";
import { getSliderItemsSucceeded , createSliderItemSucceeded , editSliderItem , editSliderItemSucceeded, deleteSliderItemSucceeded} from "../Actions/slider-action";
import { ISliderItem } from "../../lib/index";

interface IState{
    SliderItems: ISliderItem[];
    
}

export const sliderItemsReducer = reducer<IState>(
    {
        SliderItems: [],
    },
    on(getSliderItemsSucceeded, (state, { payload }) => ({
        ...state,
        SliderItems: payload,
    })),
    on(createSliderItemSucceeded, (state, { payload }) => ({
        ...state,
        SliderItems: [...state.SliderItems , payload]
    })),
    on(editSliderItemSucceeded, (state, { payload }) => {
        const oldData = state.SliderItems.filter((SliderItem) => SliderItem._id !== payload._id);
        const newSliderItems = payload;
        return{
            ...state,
            SliderItems: [...oldData, newSliderItems]
        }
    }),
    on(deleteSliderItemSucceeded, (state, { payload }) => {
        const oldData = state.SliderItems.filter((SliderItem) => SliderItem._id !== payload._id);
        return{
            ...state,
            SliderItems: [...oldData]
        }
    }),
    // on(editSliderItemSucceeded, (state, { payload }) => ({
    //     ...state,
    //     SliderItems: [...state.SliderItems , payload]
    // })),
    
)