import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Collapse } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import * as style from './style.module.css';
const mapStateToProps = state => ({
    ...state
});

const Sidebar = (props) => {
        const [is_selected , setSelected] = React.useState('');
        const handelAdminSelect = () =>{
            setSelected('admin');
        }
        const handelStudentsSelect = () =>{
            setSelected('student');
        }

        const handelHomePageSelect = () =>{
            setSelected('home');
        }
        const handelHighlightsPageSelect = () =>{
            setSelected('highlights');
        }
        const handelBlogPageSelect = () =>{
            setSelected('blog');
        }
        const handelContactsSelect = () =>{
            setSelected('contacts');
        }
        const handelCoursesSelect = () =>{
            setSelected('courses');
        }
        return (
            <aside className="left-sidebar" id="sidebarbg" data-sidebarbg={"skin6"}>
                <div className="scroll-sidebar">
                    <PerfectScrollbar className="sidebar-nav">
        
                        <Nav id="sidebarnav">
                            <li onClick={handelAdminSelect} className={'sidebar-item'}>
                                <NavLink to='/admins' className="sidebar-link" style={{display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}} activeClassName={`${style.default.act} active`}>
                                    <span className="hide-menu">Admins</span>
                                </NavLink>
                            </li>
                            <li onClick={handelStudentsSelect} className={'sidebar-item'}>
                                <NavLink to='/students' className="sidebar-link" style={{display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}} activeClassName={`${style.default.act} active`}>
                                    <span className="hide-menu">Students</span>
                                </NavLink>
                            </li>


                            <li onClick={handelHomePageSelect} className={'sidebar-item'}>
                                <NavLink to='/home' className="sidebar-link" style={{display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}} activeClassName={`${style.default.act} active`}>
                                    <span className="hide-menu">Home Page</span>
                                </NavLink>
                            </li>

                            <li onClick={handelHighlightsPageSelect} className={'sidebar-item'}>
                                <NavLink to='/highlights' className="sidebar-link" style={{display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}} activeClassName={`${style.default.act} active`}>
                                    <span className="hide-menu">Highlights Page</span>
                                </NavLink>
                            </li>

                            <li onClick={handelBlogPageSelect} className={'sidebar-item'}>
                                <NavLink to='/blog' className="sidebar-link" style={{display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}} activeClassName={`${style.default.act} active`}>
                                    <span className="hide-menu">Blog Page</span>
                                </NavLink>
                            </li>

                            <li onClick={handelContactsSelect} className={'sidebar-item'}>
                                <NavLink to='/contacts' className="sidebar-link" style={{display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}} activeClassName={`${style.default.act} active`}>
                                    <span className="hide-menu">Contacts</span>
                                </NavLink>
                            </li>

                            <li onClick={handelCoursesSelect} className={'sidebar-item'}>
                                <NavLink to='/courses' className="sidebar-link" style={{display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'}} activeClassName={`${style.default.act} active`}>
                                    <span className="hide-menu">Courses</span>
                                </NavLink>
                            </li>
                            
                        </Nav>
                    </PerfectScrollbar>
                </div>
            </aside>
        );
}
export default connect(mapStateToProps)(Sidebar);
