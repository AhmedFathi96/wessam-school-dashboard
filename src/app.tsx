import React from 'react';
import indexRoutes from './routes';
import { HashRouter } from "react-router-dom";
import { PrivateRoute } from './routes/PrivateRoutes';
import { useSelect } from './helper';
import Fulllayout from './layouts/fulllayout'
import Login from './views/authentication/login';

function App() {
    const { is_logging , token} = useSelect(state => state.authReducer);

    React.useEffect( ()=> {console.log('out there ========>' , is_logging , token)} , [token]);

    return (
        <div className="App">
            {is_logging ? (
                <HashRouter>
                    <Fulllayout />
                </HashRouter>
                ) : (
                    <Login />
            )}

        </div>
    );
}

export default App;