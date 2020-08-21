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
import { editTestimonial, deleteTestimonial } from "../../../React-Redux/Actions/testimonial-action";

interface IProps{
    img_src:string;
    testimonial_content: string;
    testimonial_author: string;
    testimonial_author_job: string;
    id:string;
    order: number;
}
const SingleTestimonialCard:React.FC<IProps> = (props) => {
    const {img_src,testimonial_author,testimonial_author_job,testimonial_content,order,id} = props;
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }
    const dispatch = useDispatch();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("content",event.target.testimonial_content.value);
        data.append("author",event.target.testimonial_author.value);
        data.append("about_author",event.target.testimonial_author_job.value);
        data.append("order",event.target.order.value);
        data.append("testimonial_img",event.target.img_src.files[0]);
        dispatch(editTestimonial({data:data , id: id}));
        setModal(!modal);
    }

    return (
        <div className={styles.default.card}>
            <Modal isOpen={modal} toggle={toggle.bind(null)}>
                <ModalHeader toggle={toggle.bind(null)}>{obj.testimonial_content === undefined?'Create new testimonial':'Edit existed testimonial'}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(event) => handleSubmit(event)}>
                        <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                        <FormGroup>
                            <Label for="testimonial_content">Testimonial Content</Label>
                            <Input type="textarea" rows="5" name="testimonial_content" placeholder="Ex: The required text" id="testimonial_content" defaultValue={obj.testimonial_content} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="author">Testimonial author</Label>
                            <Input type="text" name="testimonial_author" placeholder="Ex: The required text" id="testimonial_author" defaultValue={obj.testimonial_author} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="author_job">Testimonial author work</Label>
                            <Input type="text" name="testimonial_author_job" placeholder="Ex: The required text" id="testimonial_author_job" defaultValue={obj.testimonial_author_job} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="order">Testimonial Order</Label>
                            <Input type="number" name="order" placeholder="Ex: 1" id="order" defaultValue={obj.order} required />
                        </FormGroup>
                        <FormGroup className="mb-1">
                            <Label for="name">Upload Testimonial author image</Label>
                            <div className="custom-file">
                                <Input type="file" name="img_src"  className="custom-file-input"  id="customFile1" />
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
                <CardImg top width="100%" src={img_src} alt="Card image cap" />
                
                <CardBody className="text-center">
                    <CardHeader style={{textAlign: 'left'}}>
                        {testimonial_content}
                    </CardHeader>
                    <CardHeader style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>
                            {testimonial_author}
                        </span>
                        <span>
                            {testimonial_author_job}
                        </span>
                    </CardHeader>
                    <CardSubtitle className="mb-0" style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{textAlign: 'left', marginTop:'1rem' , fontSize:'18px'}}>
                            testimonial order: {order}
                        </span>
                        <div className={styles.default.controlWrapper}>
                            <Button
                                onClick={() => {
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
                                    dispatch(deleteTestimonial(id))
                                    setObj(props);
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

export default SingleTestimonialCard;