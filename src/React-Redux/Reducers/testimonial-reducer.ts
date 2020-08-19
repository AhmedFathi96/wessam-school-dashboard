import { reducer, on } from "ts-action";
import { getTestimonialsSucceeded , createTestimonialSucceeded  , editTestimonialSucceeded, deleteTestimonialSucceeded} from "../Actions/testimonial-action";
import { ITestimonialSection } from "../../lib/index";

interface IState{
    Testimonial: ITestimonialSection[];
    testimonial_is_loading:boolean
    
}

export const testimonialReducer = reducer<IState>(
    {
        Testimonial: [],
        testimonial_is_loading:false
    },
    on(getTestimonialsSucceeded, (state, { payload }) => ({
        ...state,
        Testimonial: payload,
        testimonial_is_loading:true
    })),
    on(createTestimonialSucceeded, (state, { payload }) => ({
        ...state,
        Testimonial: [...state.Testimonial , payload],
        testimonial_is_loading:true
    })),
    on(editTestimonialSucceeded, (state, { payload }) => {
        const oldData = state.Testimonial.filter((SliderItem) => SliderItem._id !== payload._id);
        const newTestimonial = payload;
        return{
            ...state,
            Testimonial: [...oldData, newTestimonial],
            testimonial_is_loading:true
        }
    }),
    on(deleteTestimonialSucceeded, (state, { payload }) => {
        const oldData = state.Testimonial.filter((SliderItem) => SliderItem._id !== payload._id);
        return{
            ...state,
            Testimonial: [...oldData],
            testimonial_is_loading:true
        }
    }),
    // on(editTestimonialucceeded, (state, { payload }) => ({
    //     ...state,
    //     Testimonial: [...state.Testimonial , payload]
    // })),
    
)