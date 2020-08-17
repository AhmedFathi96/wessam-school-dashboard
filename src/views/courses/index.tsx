import React from "react";
import CoursesTable from "./CoursesTable/index";
import { useDispatch } from 'react-redux';
import { useSelect } from "../../helper";
import { getCourses } from "../../React-Redux/Actions/courses-action";

const Courses:React.FC = () => {
    const dispatch = useDispatch();

    const {Courses} = useSelect(state => state.coursesReducer);
    React.useEffect( ()=>{
        dispatch(getCourses())
    },[])

    return (
        <>
            <CoursesTable Courses={Courses} />
        </>
    );
}

export default Courses;