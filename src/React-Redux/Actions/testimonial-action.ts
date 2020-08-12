import {action , payload} from 'ts-action';
import { getTestimonialsAction, createTestimonialAction  , editTestimonialAction, deleteTestimonialAction} from '.';
import { ITestimonialSection } from '../../lib/index';

export const getTestimonials = action(getTestimonialsAction.requested);
export const getTestimonialsSucceeded = action(getTestimonialsAction.fulfilled , payload<ITestimonialSection[]>());
export const getTestimonialsFailed = action(getTestimonialsAction.rejected, payload<Error>());


export const createTestimonial = action(createTestimonialAction.requested, payload<FormData>());
export const createTestimonialSucceeded = action(createTestimonialAction.fulfilled , payload<ITestimonialSection>());
export const createTestimonialFailed = action(createTestimonialAction.rejected, payload<Error>());


export const editTestimonial = action(editTestimonialAction.requested, payload<{data:FormData , id: string}>());
export const editTestimonialSucceeded = action(editTestimonialAction.fulfilled , payload<ITestimonialSection>());
export const editTestimonialFailed = action(editTestimonialAction.rejected, payload<Error>());


export const deleteTestimonial = action(deleteTestimonialAction.requested, payload<string>());
export const deleteTestimonialSucceeded = action(deleteTestimonialAction.fulfilled , payload<ITestimonialSection>());
export const deleteTestimonialFailed = action(deleteTestimonialAction.rejected, payload<Error>());