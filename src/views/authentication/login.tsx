import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    CustomInput,
    FormGroup,
    Row,
    Col,
    Button
} from 'reactstrap';
import img2 from '../../assets/images/background/login-register.jpg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../React-Redux/Actions/login-action';
import { useSelect } from '../../helper';
const sidebarBackground = {
    backgroundImage: "url(" + img2 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center"
};

const Login = () => {

    const handleClick = () => {
        var elem = document.getElementById('loginform');
        elem!.style.transition = "all 2s ease-in-out";
        elem!.style.display = "none";
        document.getElementById('recoverform')!.style.display = "block";
    }
    const dispatch = useDispatch();
    const {is_logging , token} = useSelect(state => state.authReducer);

    React.useEffect( ()=> {console.log('========>' , is_logging , token)} , [is_logging]);

    const submit = (values:any) => {
        dispatch(login({password:values.password , email:values.email}))
        console.log('=======' , values)    
    };

    return <div className="">
        {/*--------------------------------------------------------------------------------*/}
        {/*Login Cards*/}
        {/*--------------------------------------------------------------------------------*/}
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={sidebarBackground}>
            <div className="auth-box on-sidebar">
                <div id="loginform">
                    <div className="logo">
                        <span className="db"><img src={require('../../assets/250_50.png')} style={{width: "250px"}} alt="logo" /></span>
                        <h5 className="font-medium mb-3">Sign In to Admin</h5>
                    </div>
                    <Row>
                        <Col xs="12">
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().required('email is required'),
                                    password: Yup.string().required('Password is required')
                                })}
                                onSubmit={submit}
                                render={({ errors, status, touched, isSubmitting }) => (
                                    <Form className="mt-3" id="loginform">
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ti-user"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>

                                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ti-pencil"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />

                                        </InputGroup>
                                        <div className="d-flex no-block align-items-center mb-3">
                                            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Remember Me" />
                                            <div className="ml-auto">
                                                <a href="#recoverform" id="to-recover" onClick={handleClick.bind(null)} className="forgot text-dark float-right"><i className="fa fa-lock mr-1"></i> Forgot pwd?</a>
                                            </div>
                                        </div>
                                        <Row className="mb-3">
                                            <Col xs="12">
                                                <button type="submit" className="btn btn-block btn-primary">Login</button>
                                            </Col>
                                        </Row>
                                    
                                        {status &&
                                            <div className={'alert alert-danger'}>{status}</div>
                                        }
                                    </Form>
                                )}
                            />
                        </Col>
                    </Row>
                </div>
                <div id="recoverform">
                    <div className="logo">
                        <span className="db"><img src={require('../../assets/250_50.png')} style={{width: "250px"}} alt="logo" /></span>
                        <h5 className="font-medium mb-3">Recover Password</h5>
                        <span>Enter your Email and instructions will be sent to you!</span>
                    </div>
                    <Row className="mt-3">
                        <Col xs="12">
                            <Form action="/dashbaord">
                                <FormGroup>
                                    <Input type="text" name="uname" bsSize="lg" id="Name" placeholder="email" required />
                                </FormGroup>
                                <Row className="mt-3">
                                    <Col xs="12">
                                        <Button color="danger" size="lg" type="submit" block>Reset</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>;
}

export default Login;
