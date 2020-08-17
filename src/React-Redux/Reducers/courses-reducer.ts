import { reducer, on } from "ts-action";
import { getCoursesSucceeded , createCourseSucceeded , deleteCourseSucceeded} from "../Actions/courses-action";
import { ICourse } from "../../lib/index";

interface IState{
    Courses: ICourse[];
    
}

export const coursesReducer = reducer<IState>(
    {
        Courses: [],
    },
    on(getCoursesSucceeded, (state, { payload }) => ({
        ...state,
        Courses: payload,
    })),
    on(createCourseSucceeded, (state, { payload }) => ({
        ...state,
        Courses: [...state.Courses , payload]
    })),
    on(deleteCourseSucceeded, (state, { payload }) => {
        const oldData = state.Courses.filter((Course) => Course._id !== payload._id);
        return{
            ...state,
            Courses: [...oldData]
        }
    }),
    // on(editCourseSucceeded, (state, { payload }) => ({
    //     ...state,
    //     Courses: [...state.Courses , payload]
    // })),
    
)