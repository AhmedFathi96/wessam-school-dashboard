import { reducer, on } from "ts-action";
import { getStudentsSucceeded , createStudentSucceeded , editStudent , editStudentSucceeded, deleteStudentSucceeded} from "../Actions/student-action";
import { IStudent } from "../../lib/index";

interface IState{
    students: IStudent[];
    student_is_loading:boolean
    
}

export const studentsReducer = reducer<IState>(
    {
        students: [],
        student_is_loading:false
    },
    on(getStudentsSucceeded, (state, { payload }) => ({
        ...state,
        students: payload,
        student_is_loading:true
    })),
    on(createStudentSucceeded, (state, { payload }) => ({
        ...state,
        students: [...state.students , payload],
        student_is_loading:true
    })),
    on(editStudentSucceeded, (state, { payload }) => {
        const oldData = state.students.filter((student) => student._id !== payload._id);
        const newsStudents = payload;
        return{
            ...state,
            students: [...oldData, newsStudents],
            student_is_loading:true
        }
    }),
    on(deleteStudentSucceeded, (state, { payload }) => {
        const oldData = state.students.filter((student) => student._id !== payload._id);
        return{
            ...state,
            students: [...oldData],
            student_is_loading:true
        }
    }),
    // on(editstudentSucceeded, (state, { payload }) => ({
    //     ...state,
    //     students: [...state.students , payload]
    // })),
    
)