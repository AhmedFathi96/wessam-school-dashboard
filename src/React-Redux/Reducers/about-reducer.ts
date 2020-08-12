import { reducer, on } from "ts-action";
import { getAboutSucceeded , createAboutSucceeded  , editAboutSucceeded, deleteAboutSucceeded} from "../Actions/about-action";
import { IAboutSection } from "../../lib/index";

interface IState{
    About: IAboutSection[];
    
}

export const aboutReducer = reducer<IState>(
    {
        About: [],
    },
    on(getAboutSucceeded, (state, { payload }) => ({
        ...state,
        About: payload,
    })),
    on(createAboutSucceeded, (state, { payload }) => ({
        ...state,
        About: [...state.About , payload]
    })),
    on(editAboutSucceeded, (state, { payload }) => {
        const oldData = state.About.filter((SliderItem) => SliderItem._id !== payload._id);
        const newAbout = payload;
        return{
            ...state,
            About: [...oldData, newAbout]
        }
    }),
    on(deleteAboutSucceeded, (state, { payload }) => {
        const oldData = state.About.filter((SliderItem) => SliderItem._id !== payload._id);
        return{
            ...state,
            About: [...oldData]
        }
    }),
    // on(editAboutucceeded, (state, { payload }) => ({
    //     ...state,
    //     About: [...state.About , payload]
    // })),
    
)