import React from "react";
import StudentsTable from "./studentsTable/index";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";
import { getStudents } from "../../React-Redux/Actions/student-action";

const Students:React.FC = () => {

    const dispatch = useDispatch();

    const {students} = useSelect(state => state.studentsReducer);
    React.useEffect( ()=>{
        dispatch(getStudents())
    },[])

    return (
        <StudentsTable students ={students} />
    );
}

export default Students;