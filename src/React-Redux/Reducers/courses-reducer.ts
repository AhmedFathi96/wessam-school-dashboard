import { reducer, on } from "ts-action";
import { getCoursesSucceeded , createCourseSucceeded , deleteCourseSucceeded} from "../Actions/courses-action";
import { ICourse } from "../../lib/index";

interface IState{
    Courses: ICourse[];
    courses_is_loading:boolean
}

export const coursesReducer = reducer<IState>(
    {
        Courses: [],
        courses_is_loading:false
    },
    on(getCoursesSucceeded, (state, { payload }) => ({
        ...state,
        Courses: payload,
        courses_is_loading:true
    })),
    on(createCourseSucceeded, (state, { payload }) => ({
        ...state,
        Courses: [...state.Courses , payload],
        courses_is_loading:true
    })),
    on(deleteCourseSucceeded, (state, { payload }) => {
        const oldData = state.Courses.filter((Course) => Course._id !== payload._id);
        return{
            ...state,
            Courses: [...oldData],
            courses_is_loading:true
        }
    }),
    // on(editCourseSucceeded, (state, { payload }) => ({
    //     ...state,
    //     Courses: [...state.Courses , payload]
    // })),
    
)