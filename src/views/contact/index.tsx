import React from "react";
import ContactsTable from "./contactsTable/index";
import { useDispatch } from 'react-redux';
import { useSelect } from "../../helper";
import { getContacts } from "../../React-Redux/Actions/contact-action";
const Contacts:React.FC = () => {
    const dispatch = useDispatch();

    const {Contacts} = useSelect(state => state.contactsReducer);
    React.useEffect( ()=>{
        dispatch(getContacts())
    },[])

    return (
        <ContactsTable contacts={Contacts} />
    );
}

export default Contacts;