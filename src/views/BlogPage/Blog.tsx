import React, { useState } from "react";
import * as styles from './styles.module.css';
import SingleBlogPostCard from "./BlogPostCard";
import { CardBody, Card, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import {  createBlogPost } from "../../React-Redux/Actions/blog-action";
import { IBlogPost } from "../../lib";

interface IProps{
    BlogPost: IBlogPost[];
}

const Blog:React.FC<IProps> = (props) => {
    const {BlogPost} = props
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
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
        dispatch(createBlogPost(data));
        setModal(!modal);
    }


    return (
        <div>
                <Card>
                <CardTitle className="border-bottom p-3 mb-0">
                    <div className={styles.default.headerWrapper}>
                        <span>
                            <i className="mdi mdi-border-right mr-2"></i>Blog Page
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
                            <i className="fa fa-plus" /> create new blog post
                        </Button>
                    </div>
                </CardTitle>
                <Modal isOpen={modal} toggle={toggle.bind(null)}>
                        <ModalHeader toggle={toggle.bind(null)}>{obj.slider_caption === undefined?'Create new gallery images':'Edit existed gallery images'}</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={(event) => handleSubmit(event)}>
                            <Input type="hidden" name="id" id="id" />
                            <FormGroup>
                                <Label for="header">Post header</Label>
                                <Input type="text" name="header" placeholder="Ex: some shit" id="header" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="post_content">Post snippet content</Label>
                                <Input type="textarea" rows="4" name="post_content" placeholder="Ex: hello bitches" id="post_content" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="content_body">Post detail content</Label>
                                <Input type="textarea" rows="10" name="content_body" placeholder="Ex: hello bitches" id="content_body" required />
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

                <CardBody>
                <div className={styles.default.sliderWrapper}>
                    {
                        BlogPost.map( item=> 
                            <SingleBlogPostCard 
                                id={item._id} 
                                blog_cover_img={`api/blog/get-blog-post-cover-image/${item._id}/view`} 
                                blog_post_img={`api/blog/get-blog-post-image/${item._id}/view`} 
                                content_body={item.content_body}
                                header={item.header}
                                created_at={item.createdAt}
                                post_content={item.post_content}
                            />
                        )
                    }
                </div>
                </CardBody>
            </Card>
        
        </div>
    );
}

export default Blog;