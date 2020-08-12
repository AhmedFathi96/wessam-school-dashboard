import React, { useState, useEffect } from "react";
import * as styles from './styles.module.css';
import { CardBody, Card, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label, CardImg, CardHeader, CardSubtitle } from "reactstrap";
import SingleAboutCard from "./AboutCard";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";
import { getAbout, createAbout } from "../../React-Redux/Actions/about-action";

const HomeAbout:React.FC = () => {

    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const {About} = useSelect(state=> state.aboutReducer)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAbout());
    },[])

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("header",event.target.about_header.value);
        data.append("content",event.target.about_content.value);
        data.append("order",event.target.order.value);
        data.append("about_img",event.target.about_image.files[0]);
        dispatch(createAbout(data));
        setModal(!modal);
    }
    return (
        <div>
                <Card>
                    <CardTitle className="border-bottom p-3 mb-0">
                        <div className={styles.default.headerWrapper}>
                            <span>
                                <i className="mdi mdi-border-right mr-2"></i>Home Page About Section
                            </span>
                            
                            <Button
                                onClick={() => {
                                    // let obj = data2.find((o) => o.id === prop.id);
                                    setModal(!modal);
                                }}
                                color="info"
                                size="sm"
                                round="true"
                                icon="true"
                            >
                                <i className="fa fa-edit" /> Create About Section
                            </Button>

                        </div>
                    </CardTitle>
                    <Modal isOpen={modal} toggle={toggle.bind(null)}>
                            <ModalHeader toggle={toggle.bind(null)}>{obj.about_header === undefined?'Create new slider':'Edit About Section'}</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={(event) => handleSubmit(event)}>
                                    <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                                    <FormGroup>
                                        <Label for="about_header">about header</Label>
                                        <Input type="text" name="about_header" placeholder="Ex: hello bitches" id="about_header" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="about_content">about content</Label>
                                        <Input type="textarea" rows="8" name="about_content" placeholder="Ex: this is trail" id="about_content" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="about_order">about order</Label>
                                        <Input type="number" name="order" placeholder="Ex: 1" id="order" required />
                                    </FormGroup>
                                    <FormGroup className="mb-1">
                                        <Label for="name">Upload about image</Label>
                                        <div className="custom-file">
                                            <Input type="file" name="about_image"  className="custom-file-input" id="customFile1" />
                                            <label className="custom-file-label" htmlFor="customFile1">Choose file</label>
                                        </div>
                                    </FormGroup>
                                    <br />
                                    <FormGroup>
                                        <Button color="primary" type="submit">Save</Button>
                                        <Button color="secondary" className="ml-1" onClick={toggle.bind(null)}>Cancel</Button>
                                    </FormGroup>
                                </Form>
                            
                            </ModalBody>
                        </Modal>

                    <CardBody>
                    <div className={styles.default.sliderWrapper}>
                        {
                            About.map(item=> <SingleAboutCard about_content={item.content} about_header={item.header} about_img={`http://161.35.115.193:5026/api/about/get-about-image/${item._id}/view`} id={item._id} order={item.order} />)
                        }
                    </div>
                    
                    
                    </CardBody>
                
            </Card>
        
        </div>
    );
}

export default HomeAbout;