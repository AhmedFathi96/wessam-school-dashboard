import React from "react";
import AdminsTable from "./adminsTable/index";
import { useDispatch } from 'react-redux';
import { getAdmins } from "../../React-Redux/Actions/admin-action";
import { useSelect } from "../../helper";
import Loader from 'react-loader-spinner';
import ReactNotification from 'react-notifications-component';


const Admins:React.FC = () => {
    const dispatch = useDispatch();

    const {admins , is_loading} = useSelect(state => state.adminsReducer);
    React.useEffect( ()=>{
        dispatch(getAdmins())
    },[])

    return (
        <>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (is_loading)?
                    <>
                        <AdminsTable admins={admins} />
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

export default Admins;