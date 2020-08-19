import { reducer, on } from "ts-action";
import { getBlogPostSucceeded , createBlogPostSucceeded  , editBlogPostSucceeded, deleteBlogPostSucceeded} from "../Actions/blog-action";
import { IBlogPost } from "../../lib/index";

interface IState{
    BlogPost: IBlogPost[];
    blog_is_loading:boolean
    
}

export const blogReducer = reducer<IState>(
    {
        BlogPost: [],
        blog_is_loading:false
    },
    on(getBlogPostSucceeded, (state, { payload }) => ({
        ...state,
        BlogPost: payload,
        blog_is_loading:true
    })),
    on(createBlogPostSucceeded, (state, { payload }) => ({
        ...state,
        BlogPost: [...state.BlogPost , payload],
        blog_is_loading:true
    })),
    on(editBlogPostSucceeded, (state, { payload }) => {
        const oldData = state.BlogPost.filter((SliderItem) => SliderItem._id !== payload._id);
        const newBlogPost = payload;
        return{
            ...state,
            BlogPost: [...oldData, newBlogPost],
            blog_is_loading:true
        }
    }),
    on(deleteBlogPostSucceeded, (state, { payload }) => {
        const oldData = state.BlogPost.filter((SliderItem) => SliderItem._id !== payload._id);
        return{
            ...state,
            BlogPost: [...oldData],
            blog_is_loading:true
        }
    }),
    // on(editBlogPostucceeded, (state, { payload }) => ({
    //     ...state,
    //     BlogPost: [...state.BlogPost , payload]
    // })),
    
)