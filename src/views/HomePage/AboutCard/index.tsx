import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, CardHeader
} from 'reactstrap';
import * as styles from './styles.module.css';
import { useDispatch } from "react-redux";
import { editAbout , deleteAbout} from "../../../React-Redux/Actions/about-action";

interface IProps{
    about_header:string;
    about_content:string;
    about_img: string;
    id:string;
    order:number;
}
const SingleAboutCard:React.FC<IProps> = (props) => {
    const {about_content,about_header,about_img,order,id} = props;
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("header",event.target.about_header.value);
        data.append("content",event.target.about_content.value);
        data.append("order",event.target.order.value);
        data.append("about_img",event.target.about_image.files[0]);
        dispatch(editAbout({data:data , id: id}));
    
        setModal(!modal);
    }

    return (
        <div className={styles.default.card}>
            <Modal isOpen={modal} toggle={toggle.bind(null)}>
                <ModalHeader toggle={toggle.bind(null)}>{obj.about_caption === undefined?'Create new about':'Edit existed about'}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(event) => handleSubmit(event)}>
                        <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                        <FormGroup>
                            <Label for="about_header">about header</Label>
                            <Input type="text" name="about_header" placeholder="Ex: The required text" id="about_header" defaultValue={obj.about_header} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="about_content">about content</Label>
                            <Input type="textarea" rows="8" name="about_content" placeholder="Ex: this is trail" id="about_content" defaultValue={obj.about_content} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="about_order">about order</Label>
                            <Input type="number" name="order" placeholder="Ex: 1" id="order" defaultValue={obj.order}  required />
                        </FormGroup>
                        <FormGroup className="mb-1">
                            <Label for="name">Upload about image</Label>
                            <div className="custom-file">
                                <Input type="file" name="about_image"  className="custom-file-input"  id="customFile1" />
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

            <Card>
                <CardImg top width="100%" className={styles.default.img} src={about_img} alt="Card image cap" />
                
                <CardBody className="text-center">
                    <CardHeader style={{textAlign: 'left'}}>
                        <h3>{about_header}</h3> 
                        <span>{about_content}</span>
                    </CardHeader>
                    <CardSubtitle className="mb-0" style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{textAlign: 'left', marginTop:'1rem' , fontSize:'18px'}}>
                            about order: {order}
                        </span>
                        <div className={styles.default.controlWrapper}>
                            <Button
                                onClick={() => {
                                    // let obj = data2.find((o) => o.id === prop.id);
                                    setModal(!modal);
                                    setObj(props);
                                }}
                                color="success"
                                size="sm"
                                round="true"
                                icon="true"
                            >
                                <i className="fa fa-edit" /> Edit
                            </Button>

                            <Button
                                onClick={() => {
                                    dispatch(deleteAbout(id));
                                }}
                                color="danger"
                                size="sm"
                                round="true"
                                icon="true"
                            >
                                <i className="fa fa-trash" /> Delete
                            </Button>
                        </div>
                    </CardSubtitle>
                </CardBody>
            </Card>
                    
        </div>
    );
}

export default SingleAboutCard;