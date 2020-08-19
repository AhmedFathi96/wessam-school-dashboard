import React from "react";
import StudentsTable from "./studentsTable/index";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";
import { getStudents } from "../../React-Redux/Actions/student-action";
import Loader from "react-loader-spinner";
import ReactNotification from 'react-notifications-component';

const Students:React.FC = () => {

    const dispatch = useDispatch();

    const {students , student_is_loading} = useSelect(state => state.studentsReducer);
    React.useEffect( ()=>{
        dispatch(getStudents())
    },[])

    return (
        <>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (student_is_loading)?
                    <>
                        <StudentsTable students ={students} />
                    </>
                    :
                    <div style={{margin: '25% 40%'}}>
                        <Loader
                            type="Puff"
                            color="#B09E80"
                            height={150}
                            width={150}
                        />
                    </div>
                    
            }
        
        </>
        
    );
}

export default Students;