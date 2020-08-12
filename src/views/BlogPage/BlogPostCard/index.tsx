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
import { editBlogPost, deleteBlogPost } from "../../../React-Redux/Actions/blog-action";


interface IProps{
    blog_cover_img:string;
    blog_post_img:string;
    post_content:string;
    header:string;
    content_body:string;
    created_at?:string;
    id:string;
}
const SingleBlogPostCard:React.FC<IProps> = (props) => {
    const {blog_post_img,blog_cover_img,content_body,header,post_content,created_at,id} = props;
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }
    const toggle2 = () => {
        setModal2(!modal2);
    }
    const dispatch = useDispatch();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("post_content",event.target.post_content.value);
        data.append("header",event.target.header.value);
        data.append("content_body",event.target.content_body.value);
        data.append("blog_post_img",event.target.blog_post_img.files[0]);
        data.append("blog_cover_img",event.target.blog_cover_img.files[0]);
        dispatch(editBlogPost({data:data , id: id}));
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
                            <Label for="header">Post header</Label>
                            <Input type="text" name="header" placeholder="Ex: some shit" id="header" defaultValue={obj.header} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="post_content">Post snippet content</Label>
                            <Input type="textarea" rows="4" name="post_content" placeholder="Ex: hello bitches" id="post_content" defaultValue={obj.post_content} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content_body">Post detail content</Label>
                            <Input type="textarea" rows="10" name="content_body" placeholder="Ex: hello bitches" id="content_body" defaultValue={obj.content_body} required />
                        </FormGroup>

                        <FormGroup className="mb-1">
                            <Label for="name">Upload Post header image</Label>
                            <div className="custom-file">
                                <Input type="file" name="blog_post_img"  className="custom-file-input"  id="blog_post_img" />
                                <label className="custom-file-label" htmlFor="blog_post_img">Choose file</label>
                            </div>
                        </FormGroup>

                        <FormGroup className="mb-1">
                            <Label for="name">Upload Post cover image</Label>
                            <div className="custom-file">
                                <Input type="file" name="blog_cover_img"  className="custom-file-input"  id="blog_cover_img" />
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


            <Modal isOpen={modal2} toggle={toggle2.bind(null)}>
                <ModalHeader toggle={toggle2.bind(null)}>{header}</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardImg top width="100%" src={blog_cover_img} alt="Card image cap" />
                        
                        <CardBody className="text-center">
                            
                            <CardHeader style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span>
                                    {content_body}
                                </span>
                            </CardHeader>
                        
                        </CardBody>
                    </Card>
            
                </ModalBody>
            </Modal>

            <Card>
                <CardImg top width="100%" src={blog_post_img} alt="Card image cap" />
                
                <CardBody className="text-center">
                    <CardHeader style={{textAlign: 'left'}}>
                        {header}
                    </CardHeader>
                    <CardHeader style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>
                            {post_content}
                        </span>
                    </CardHeader>
                    <CardSubtitle className="mb-0" style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{textAlign: 'left', marginTop:'1rem' , fontSize:'18px'}}>
                            Created at: <br />{created_at}
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
                                    dispatch(deleteBlogPost(id))
                                    setObj(props);
                                }}
                                color="danger"
                                size="sm"
                                round="true"
                                icon="true"
                            >
                                <i className="fa fa-trash" /> Delete
                            </Button>

                            <Button
                                onClick={() => {
                                    setModal2(!modal2);
                                    setObj(props);
                                }}
                                color="info"
                                size="sm"
                                round="true"
                                icon="true"
                            >
                                <i className="fas fa-coffee" /> View
                            </Button>
                        </div>
                    </CardSubtitle>
                </CardBody>
            </Card>
                    
        </div>
    );
}

export default SingleBlogPostCard;