import { reducer, on } from "ts-action";
import { getBlogPostSucceeded , createBlogPostSucceeded  , editBlogPostSucceeded, deleteBlogPostSucceeded} from "../Actions/blog-action";
import { IBlogPost } from "../../lib/index";

interface IState{
    BlogPost: IBlogPost[];
    
}

export const blogReducer = reducer<IState>(
    {
        BlogPost: [],
    },
    on(getBlogPostSucceeded, (state, { payload }) => ({
        ...state,
        BlogPost: payload,
    })),
    on(createBlogPostSucceeded, (state, { payload }) => ({
        ...state,
        BlogPost: [...state.BlogPost , payload]
    })),
    on(editBlogPostSucceeded, (state, { payload }) => {
        const oldData = state.BlogPost.filter((SliderItem) => SliderItem._id !== payload._id);
        const newBlogPost = payload;
        return{
            ...state,
            BlogPost: [...oldData, newBlogPost]
        }
    }),
    on(deleteBlogPostSucceeded, (state, { payload }) => {
        const oldData = state.BlogPost.filter((SliderItem) => SliderItem._id !== payload._id);
        return{
            ...state,
            BlogPost: [...oldData]
        }
    }),
    // on(editBlogPostucceeded, (state, { payload }) => ({
    //     ...state,
    //     BlogPost: [...state.BlogPost , payload]
    // })),
    
)