import { reducer, on } from "ts-action";
import { getPagesHeadersSucceeded, editHighlightsPageHeaderSucceeded , editContactsPageHeaderSucceeded ,editBlogPageHeaderSucceeded, editCoursesPageHeaderSucceeded,editTestimonialPageHeaderSucceeded } from "../Actions/pages-headers-action";
import { IPageHeaders } from "../../lib/index";

interface IState{
    PagesHeaders: IPageHeaders;
    PagesHeaders_is_loading:boolean
    
}

export const pagesHeadersReducer = reducer<IState>(
    {
        PagesHeaders: {
            _id: '',
            blog_header:'',
            blog_text:'',
            contact_header:'',
            contact_text:'',
            courses_header:'',
            courses_text:'',
            highlights_header:'',
            highlights_text:'',
            testimonial_header:'',
            testimonial_text:''
                
        },
        PagesHeaders_is_loading:false
    },
    on(getPagesHeadersSucceeded, (state, { payload }) => ({
        ...state,
        PagesHeaders: payload,
        PagesHeaders_is_loading: true
    })),
    on(editHighlightsPageHeaderSucceeded, (state, { payload }) => {
        const oldData = state.PagesHeaders;
        const newPagesHeaders = payload;
        return{
            ...state,
            PagesHeaders: {
                ...oldData,
                ...newPagesHeaders
            },
            PagesHeaders_is_loading: true
        }
    }),
    on(editContactsPageHeaderSucceeded, (state, { payload }) => {
        const oldData = state.PagesHeaders;
        const newPagesHeaders = payload;
        return{
            ...state,
            PagesHeaders: {
                ...oldData,
                ...newPagesHeaders
            },
            PagesHeaders_is_loading: true
        }
    }),
    on(editBlogPageHeaderSucceeded, (state, { payload }) => {
        const oldData = state.PagesHeaders;
        const newPagesHeaders = payload;
        return{
            ...state,
            PagesHeaders: {
                ...oldData,
                ...newPagesHeaders
            },
            PagesHeaders_is_loading: true
        }
    }),
    on(editTestimonialPageHeaderSucceeded, (state, { payload }) => {
        const oldData = state.PagesHeaders;
        const newPagesHeaders = payload;
        return{
            ...state,
            PagesHeaders: {
                ...oldData,
                ...newPagesHeaders
            },
            PagesHeaders_is_loading: true
        }
    }),
    on(editCoursesPageHeaderSucceeded, (state, { payload }) => {
        const oldData = state.PagesHeaders;
        const newPagesHeaders = payload;
        return{
            ...state,
            PagesHeaders: {
                ...oldData,
                ...newPagesHeaders
            },
            PagesHeaders_is_loading: true
        }
    }),
)