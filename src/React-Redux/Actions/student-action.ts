import {action , payload} from 'ts-action';
import { getStudentsAction, createStudentAction  , editStudentAction, deleteStudentAction} from '.';
import { IStudent } from '../../lib';

export const getStudents = action(getStudentsAction.requested);
export const getStudentsSucceeded = action(getStudentsAction.fulfilled , payload<IStudent[]>());
export const getStudentsFailed = action(getStudentsAction.rejected, payload<Error>());


export const createStudent = action(createStudentAction.requested, payload<IStudent>());
export const createStudentSucceeded = action(createStudentAction.fulfilled , payload<IStudent>());
export const createStudentFailed = action(createStudentAction.rejected, payload<Error>());


export const editStudent = action(editStudentAction.requested, payload<{data:IStudent , id: string}>());
export const editStudentSucceeded = action(editStudentAction.fulfilled , payload<IStudent>());
export const editStudentFailed = action(editStudentAction.rejected, payload<Error>());


export const deleteStudent = action(deleteStudentAction.requested, payload<string>());
export const deleteStudentSucceeded = action(deleteStudentAction.fulfilled , payload<IStudent>());
export const deleteStudentFailed = action(deleteStudentAction.rejected, payload<Error>());