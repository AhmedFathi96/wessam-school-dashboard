import React from "react";
import AdminsTable from "./adminsTable/index";
import { useDispatch } from 'react-redux';
import { dataTable } from "../../layouts/layout-components/components/data";
import { getAdmins } from "../../React-Redux/Actions/admin-action";
import { useSelect } from "../../helper";
const Admins:React.FC = () => {
    const dispatch = useDispatch();

    const {admins} = useSelect(state => state.adminsReducer);
    React.useEffect( ()=>{
        dispatch(getAdmins())
    },[])

    return (
        <AdminsTable admins={admins} />
    );
}

export default Admins;