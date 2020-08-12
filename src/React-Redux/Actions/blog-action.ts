import {action , payload} from 'ts-action';
import { getBlogPostsAction, createBlogPostAction  , editBlogPostAction, deleteBlogPostAction} from '.';
import { IBlogPost } from '../../lib/index';

export const getBlogPost = action(getBlogPostsAction.requested);
export const getBlogPostSucceeded = action(getBlogPostsAction.fulfilled , payload<IBlogPost[]>());
export const getBlogPostFailed = action(getBlogPostsAction.rejected, payload<Error>());


export const createBlogPost = action(createBlogPostAction.requested, payload<FormData>());
export const createBlogPostSucceeded = action(createBlogPostAction.fulfilled , payload<IBlogPost>());
export const createBlogPostFailed = action(createBlogPostAction.rejected, payload<Error>());


export const editBlogPost = action(editBlogPostAction.requested, payload<{data:FormData , id: string}>());
export const editBlogPostSucceeded = action(editBlogPostAction.fulfilled , payload<IBlogPost>());
export const editBlogPostFailed = action(editBlogPostAction.rejected, payload<Error>());


export const deleteBlogPost = action(deleteBlogPostAction.requested, payload<string>());
export const deleteBlogPostSucceeded = action(deleteBlogPostAction.fulfilled , payload<IBlogPost>());
export const deleteBlogPostFailed = action(deleteBlogPostAction.rejected, payload<Error>());