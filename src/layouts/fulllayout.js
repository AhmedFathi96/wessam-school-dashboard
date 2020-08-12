import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './layout-components/header/header';
import Sidebar from './layout-components/sidebar/sidebar';
import Footer from './layout-components/footer/footer';
import ThemeRoutes from '../routes/router';

export default (props) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateDimensions = () => {
            let element = document.getElementById('main-wrapper');
            setWidth(window.innerWidth)
            if (width < 1170) {
                element.setAttribute("data-sidebartype", "mini-sidebar");
                element.classList.add("mini-sidebar");
            } else {
                element.setAttribute("data-sidebartype", 'iconbar');
                element.classList.remove("mini-sidebar");
            }
        }
        if (document.readyState === "complete") {
            updateDimensions();
        } 
        window.addEventListener("load", updateDimensions.bind(null));
        window.addEventListener("resize", updateDimensions.bind(null));
        return () => {
            window.removeEventListener("load", updateDimensions.bind(null));
            window.removeEventListener("resize", updateDimensions.bind(null));
        };
    }, [ width]);

    return (
        <div
            id="main-wrapper"
            dir={"ltr"}
            data-theme={"vertical"}
            data-layout={ "vertical"}
            data-sidebartype={'iconbar'}
            data-sidebar-position={"fixed"}
            data-header-position={"fixed"}
            data-boxed-layout={"full"}
        >

            <Header />
            <Sidebar {...props} routes={ThemeRoutes} />

            <div className="page-wrapper d-block">
                <div className="page-content container-fluid">
                    <Switch>
                        {ThemeRoutes.map((prop, key) => {
                            if (prop.navlabel) {
                                return null;
                            }
                            else if (prop.collapse) {
                                return prop.child.map((prop2, key2) => {
                                    if (prop2.collapse) {
                                        return prop2.subchild.map((prop3, key3) => {
                                            return (
                                                <Route path={prop3.path} component={prop3.component} key={key3} />
                                            );
                                        });
                                    }
                                    return (
                                        <Route path={prop2.path} component={prop2.component} key={key2} />
                                    );
                                });
                            }
                            else if (prop.redirect) {
                                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
                            }
                            else {
                                return (
                                    <Route path={prop.path} component={prop.component} key={key} />
                                );
                            }
                        })}
                    </Switch>
                </div>
                <Footer />
            </div>

        </div>
    );
}
