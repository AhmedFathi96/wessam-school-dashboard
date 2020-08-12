import { reducer, on } from "ts-action";
import { getStudentsSucceeded , createStudentSucceeded , editStudent , editStudentSucceeded, deleteStudentSucceeded} from "../Actions/student-action";
import { IStudent } from "../../lib/index";

interface IState{
    students: IStudent[];
    
}

export const studentsReducer = reducer<IState>(
    {
        students: [],
    },
    on(getStudentsSucceeded, (state, { payload }) => ({
        ...state,
        students: payload,
    })),
    on(createStudentSucceeded, (state, { payload }) => ({
        ...state,
        students: [...state.students , payload]
    })),
    on(editStudentSucceeded, (state, { payload }) => {
        const oldData = state.students.filter((student) => student._id !== payload._id);
        const newsStudents = payload;
        return{
            ...state,
            students: [...oldData, newsStudents]
        }
    }),
    on(deleteStudentSucceeded, (state, { payload }) => {
        const oldData = state.students.filter((student) => student._id !== payload._id);
        return{
            ...state,
            students: [...oldData]
        }
    }),
    // on(editstudentSucceeded, (state, { payload }) => ({
    //     ...state,
    //     students: [...state.students , payload]
    // })),
    
)