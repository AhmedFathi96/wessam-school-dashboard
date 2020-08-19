import React from "react";
import { useDispatch } from 'react-redux';
import { useSelect } from "../../helper";
import Loader from "react-loader-spinner";
import ReactNotification from 'react-notifications-component';
import {  getInfo } from "../../React-Redux/Actions/info-action";
import InfoComponent from "./index";

const InfoWrapper:React.FC = () => {
    const dispatch = useDispatch();

    const {Info , info_is_loading} = useSelect(state => state.infoReducer);
    React.useEffect( ()=>{
        dispatch(getInfo())
    },[])

    

    return (
        <>
            <div style={{marginBottom: '3rem',marginRight: '5rem'}}>
                <ReactNotification />
            </div>
            {
                (info_is_loading)?
                    <InfoComponent Info={Info} />
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

export default InfoWrapper;