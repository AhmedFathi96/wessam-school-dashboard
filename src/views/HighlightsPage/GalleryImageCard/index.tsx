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
import { editSliderItem, deleteSliderItem } from "../../../React-Redux/Actions/slider-action";
import { editGalleryImage, deleteGalleryImage, getGalleryImage } from "../../../React-Redux/Actions/gallery-action";

interface IProps{
    img_src:string;
    height_ration: number;
    order: number;
    id:string;
}
const SingleGalleryImageCard:React.FC<IProps> = (props) => {
    const {img_src,height_ration,order,id} = props;
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("height_ration",event.target.height_ration.value);
        data.append("order",event.target.order.value);
        data.append("gallery_img",event.target.img_src.files[0]);
        dispatch(editGalleryImage({data:data , id: id}));
        setModal(!modal);
    }

    return (
        <div className={styles.default.card}>
            <Modal isOpen={modal} toggle={toggle.bind(null)}>
                <ModalHeader toggle={toggle.bind(null)}>{obj.slider_caption === undefined?'Create new gallery image':'Edit existed gallery image'}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(event) => handleSubmit(event)}>
                        <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                        <FormGroup>
                            <Label for="height_ratio">Image height ratio</Label>
                            <Input type="number" name="height_ration" placeholder="Ex: 4" id="height_ration" defaultValue={obj.height_ration} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="order">Image Order</Label>
                            <Input type="number" name="order" placeholder="Ex: 1" id="order" defaultValue={obj.order} required />
                        </FormGroup>
                        <FormGroup className="mb-1">
                            <Label for="name">Upload Image</Label>
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

            <Card>
                <CardImg top width="100%" src={img_src} alt="Card image cap" />
                
                <CardBody className="text-center">
                    <CardHeader style={{textAlign: 'left'}}>
                        Height Ratio: {height_ration}
                    </CardHeader>
                    <CardSubtitle className="mb-0" style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{textAlign: 'left', marginTop:'1rem' , fontSize:'18px'}}>
                            image order: {order}
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
                                    dispatch(deleteGalleryImage(id));
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

export default SingleGalleryImageCard;