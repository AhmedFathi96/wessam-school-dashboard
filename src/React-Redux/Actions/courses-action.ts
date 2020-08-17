import {action , payload} from 'ts-action';
import { getCoursesAction, createCourseAction  , deleteCourseAction ,editCourseAction} from '.';
import { ICourse } from '../../lib/index';

export const getCourses = action(getCoursesAction.requested);
export const getCoursesSucceeded = action(getCoursesAction.fulfilled , payload<ICourse[]>());
export const getCoursesFailed = action(getCoursesAction.rejected, payload<Error>());


export const createCourse = action(createCourseAction.requested, payload<ICourse>());
export const createCourseSucceeded = action(createCourseAction.fulfilled , payload<ICourse>());
export const createCourseFailed = action(createCourseAction.rejected, payload<Error>());

export const deleteCourse = action(deleteCourseAction.requested, payload<string>());
export const deleteCourseSucceeded = action(deleteCourseAction.fulfilled , payload<ICourse>());
export const deleteCourseFailed = action(deleteCourseAction.rejected, payload<Error>());

export const editCourse = action(editCourseAction.requested, payload<{data:ICourse , id: string}>());
export const editCourseSucceeded = action(editCourseAction.fulfilled , payload<ICourse>());
export const editCourseFailed = action(editCourseAction.rejected, payload<Error>());