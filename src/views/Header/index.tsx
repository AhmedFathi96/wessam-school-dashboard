import React, { useState, useEffect } from "react";
import * as styles from './styles.module.css';
import { CardBody, Card, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label, CardHeader, CardSubtitle, CardImg } from "reactstrap";
import { useDispatch } from "react-redux";
import {  createBlogPost } from "../../React-Redux/Actions/blog-action";
import { editHighlightsPageHeader, editTestimonialPageHeader, editContactsPageHeader, editBlogPageHeader, editCoursesPageHeader } from "../../React-Redux/Actions/pages-headers-action";

interface IProps{
    header_image:string;
    header:string;
    text:string;
    page_name:string;
    id:string;
}

const PageHeader:React.FC<IProps> = (props) => {
    const {header,header_image,text,page_name ,id} = props
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const dispatch = useDispatch();

    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append(`${page_name}_header`,event.target.header.value);
        data.append(`${page_name}_text`,event.target.text.value);
        data.append(`${page_name}_img`,event.target.img.files[0]);

        if(page_name === 'highlights'){
            dispatch(editHighlightsPageHeader({data:data , id:id}));
        }
        if(page_name === 'courses'){
            dispatch(editCoursesPageHeader({data:data , id:id}));
        }
        if(page_name === 'blog'){
            dispatch(editBlogPageHeader({data:data , id:id}));
        }
        if(page_name === 'contact'){
            dispatch(editContactsPageHeader({data:data , id:id}));
        }
        if(page_name === 'testimonial'){
            dispatch(editTestimonialPageHeader({data:data , id:id}));
        }

        setModal(!modal);
    }


    return (
        <div>
                <Card>
                <CardTitle className="border-bottom p-3 mb-0">
                    <div className={styles.default.headerWrapper}>
                        <span>
                            <i className="mdi mdi-border-right mr-2"></i>{page_name} Page header
                        </span>
                        <Button
                            onClick={() => {
                                // let obj = data2.find((o) => o.id === prop.id);
                                setModal(!modal);
                                setObj(props);
                            }}
                            color="info"
                            size="sm"
                            round="true"
                            icon="true"
                        >
                            <i className="fa fa-plus" /> Edit {page_name} page header
                        </Button>
                    </div>
                </CardTitle>
                <Modal isOpen={modal} toggle={toggle.bind(null)}>
                        <ModalHeader toggle={toggle.bind(null)}>{`Edit ${page_name}`}</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={(event) => handleSubmit(event)}>
                            <Input type="hidden" name="id" id="id" />
                            <FormGroup>
                                <Label for="header">{page_name} header</Label>
                                <Input type="text" name="header" placeholder="Ex: My Blog" id="header" defaultValue={obj.header} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="text">{page_name} sub header</Label>
                                <Input type="textarea" rows="4" name="text" placeholder="Ex: View my best posts" id="text" defaultValue={obj.text} required />
                            </FormGroup>
                            <FormGroup className="mb-1">
                                <Label for="img">Upload {page_name} cover image</Label>
                                <div className="custom-file">
                                    <Input type="file" name="img"  className="custom-file-input"  id="img" />
                                    <label className="custom-file-label" htmlFor="blog_cover_img">Choose file</label>
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
                <CardImg top width="100%" height="540px" src={header_image} alt="Card image cap" />
                <CardBody>
                    <CardHeader style={{textAlign: 'left'}}>
                        {header}
                    </CardHeader>
                    <CardHeader style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>
                            {text}
                        </span>
                    </CardHeader>
                </CardBody>
            </Card>
        
        </div>
    );
}

export default PageHeader;