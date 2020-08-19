import React from "react";
import CoursesTable from "./CoursesTable/index";
import { useDispatch } from 'react-redux';
import { useSelect } from "../../helper";
import { getCourses } from "../../React-Redux/Actions/courses-action";
import Loader from "react-loader-spinner";
import ReactNotification from 'react-notifications-component';

const Courses:React.FC = () => {
    const dispatch = useDispatch();

    const {Courses , courses_is_loading} = useSelect(state => state.coursesReducer);
    React.useEffect( ()=>{
        dispatch(getCourses())
    },[])

    return (
        <>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (courses_is_loading)?
                    <>
                        <CoursesTable Courses={Courses} />
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

export default Courses;