import React, { useState, useEffect } from "react";
import * as styles from './styles.module.css';
import { CardBody, Card, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label } from "reactstrap";
import SingleTestimonialCard from "./TestimoialCard";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";
import { getTestimonials, createTestimonial } from "../../React-Redux/Actions/testimonial-action";

const HomeTestimonial:React.FC = () => {
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const {Testimonial} = useSelect(state=> state.testimonialReducer)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getTestimonials());
    },[])

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("content",event.target.testimonial_content.value);
        data.append("author",event.target.testimonial_author.value);
        data.append("about_author",event.target.testimonial_author_job.value);
        data.append("order",event.target.order.value);
        data.append("testimonial_img",event.target.img_src.files[0]);
        dispatch(createTestimonial(data));
    
        setModal(!modal);
    }
    return (
        <div>
                <Card>
                <CardTitle className="border-bottom p-3 mb-0">
                    <div className={styles.default.headerWrapper}>
                        <span>
                            <i className="mdi mdi-border-right mr-2"></i>Home Page Testimonial
                        </span>
                        <Button
                            onClick={() => {
                                // let obj = data2.find((o) => o.id === prop.id);
                                setModal(!modal);
                                setObj({});
                            }}
                            color="info"
                            size="sm"
                            round="true"
                            icon="true"
                        >
                            <i className="fa fa-plus" /> create new testimonial
                        </Button>
                    </div>
                </CardTitle>
                <Modal isOpen={modal} toggle={toggle.bind(null)}>
                        <ModalHeader toggle={toggle.bind(null)}>{obj.slider_caption === undefined?'Create new testimonial':'Edit existed testimonial'}</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={(event) => handleSubmit(event)}>
                                <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                                <FormGroup>
                                    <Label for="testimonial_content">Testimonial Content</Label>
                                    <Input type="textarea" rows="5" name="testimonial_content" placeholder="Ex: hello bitches" id="testimonial_content" defaultValue={obj.testimonial_content} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="order">Testimonial author</Label>
                                    <Input type="text" name="testimonial_author" placeholder="Ex: some shit" id="testimonial_author" defaultValue={obj.testimonial_author} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="order">Testimonial author work</Label>
                                    <Input type="text" name="testimonial_author_job" placeholder="Ex: some shit" id="testimonial_author_job" defaultValue={obj.testimonial_author_job} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="order">Testimonial Order</Label>
                                    <Input type="number" name="order" placeholder="Ex: 1" id="order" defaultValue={obj.order} required />
                                </FormGroup>
                                <FormGroup className="mb-1">
                                    <Label for="name">Upload Testimonial author image</Label>
                                    <div className="custom-file">
                                        <Input type="file" name="img_src"  className="custom-file-input" id="customFile1" />
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
                        Testimonial.map(item=>
                            <SingleTestimonialCard 
                                id={item._id}
                                img_src={`http://localhost:5026/api/testimonial/get-testimonial-image/${item._id}/view`} 
                                testimonial_content={item.content} 
                                testimonial_author={item.author} 
                                testimonial_author_job={item.about_author} 
                                order={item.order} 
                            />
                        )
                    }
                </div>
                </CardBody>
            </Card>
        
        </div>
    );
}

export default HomeTestimonial;