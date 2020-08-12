import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelect} from '../helper/index';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { is_logging} = useSelect(state => state.authReducer);
    const {logging , setLogging} = React.useState(is_logging);
    React.useEffect( ()=>{
        console.log('is logging =======>' , is_logging);
        setLogging(is_logging);
    },[is_logging])
    return(
        <Route {...rest} render={props => {
            if (!logging) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/authentication/login', state: { from: props.location } }} />
            }
    
            // authorised so return component
            return <Component {...props} />
        }} />
    )
    
}

export default PrivateRoute;