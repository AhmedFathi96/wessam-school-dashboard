import { reducer, on } from "ts-action";
import { getTestimonialsSucceeded , createTestimonialSucceeded  , editTestimonialSucceeded, deleteTestimonialSucceeded} from "../Actions/testimonial-action";
import { ITestimonialSection } from "../../lib/index";

interface IState{
    Testimonial: ITestimonialSection[];
    
}

export const testimonialReducer = reducer<IState>(
    {
        Testimonial: [],
    },
    on(getTestimonialsSucceeded, (state, { payload }) => ({
        ...state,
        Testimonial: payload,
    })),
    on(createTestimonialSucceeded, (state, { payload }) => ({
        ...state,
        Testimonial: [...state.Testimonial , payload]
    })),
    on(editTestimonialSucceeded, (state, { payload }) => {
        const oldData = state.Testimonial.filter((SliderItem) => SliderItem._id !== payload._id);
        const newTestimonial = payload;
        return{
            ...state,
            Testimonial: [...oldData, newTestimonial]
        }
    }),
    on(deleteTestimonialSucceeded, (state, { payload }) => {
        const oldData = state.Testimonial.filter((SliderItem) => SliderItem._id !== payload._id);
        return{
            ...state,
            Testimonial: [...oldData]
        }
    }),
    // on(editTestimonialucceeded, (state, { payload }) => ({
    //     ...state,
    //     Testimonial: [...state.Testimonial , payload]
    // })),
    
)