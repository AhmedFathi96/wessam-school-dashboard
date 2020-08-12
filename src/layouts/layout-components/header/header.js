import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, NavbarBrand} from 'reactstrap';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../../assets/images/logo-icon.png';
import logolighticon from '../../../assets/images/logo-light-icon.png';
import logodarktext from '../../../assets/images/logo-text.png';
import logolighttext from '../../../assets/images/logo-light-text.png';

export default () => {

    const [isOpen, setIsOpen] = useState(false);

    const settings = useSelector((state) => state.settings);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    return (
        <header className="topbar navbarbg" data-navbarbg={"skin4"}>
            <Navbar className={"top-navbar " + "skin6"} expand="md">
                <div className="navbar-header" id="logobg" data-logobg={"skin4"}>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <span className="nav-toggler d-block d-md-none" onClick={showMobilemenu.bind(null)}>
                        <i className="ti-menu ti-close" />
                    </span>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        <b className="logo-icon">
                            <img src={logodarkicon} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b>
                        <span className="logo-text">
                            <img src={logodarktext} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighttext}
                                className="light-logo"
                                alt="homepage"
                            />
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <span className="topbartoggler d-block d-md-none" onClick={toggle.bind(null)}>
                        <i className="ti-more" />
                    </span>
                </div>
            </Navbar>
        </header>
    );
}
