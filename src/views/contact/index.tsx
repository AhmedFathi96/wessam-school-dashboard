import React from "react";
import ContactsTable from "./contactsTable/index";
import { useDispatch } from 'react-redux';
import { useSelect } from "../../helper";
import { getContacts } from "../../React-Redux/Actions/contact-action";
import Loader from "react-loader-spinner";
import ReactNotification from 'react-notifications-component';


const Contacts:React.FC = () => {
    const dispatch = useDispatch();

    const {Contacts , contacts_is_loading} = useSelect(state => state.contactsReducer);
    React.useEffect( ()=>{
        dispatch(getContacts())
    },[])

    return (
        <>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (contacts_is_loading)?
                    <>
                        <ContactsTable contacts={Contacts} />
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

export default Contacts;