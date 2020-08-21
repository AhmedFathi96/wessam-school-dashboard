import React, { useState } from "react";
import * as styles from './styles.module.css';
import SingleGalleryImageCard from "./GalleryImageCard";
import { CardBody, Card, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { createGalleryImage,  } from "../../React-Redux/Actions/gallery-action";
import { IGalleryImage } from "../../lib";

interface IProps{
    GalleryImages: IGalleryImage[];
}
const Gallery:React.FC<IProps> = (props) => {

    const {GalleryImages} = props;
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
        data.append("width_ration",event.target.width_ration.value);
        data.append("order",event.target.order.value);
        data.append("gallery_img",event.target.img_src.files[0]);
        
        dispatch(createGalleryImage(data));
        setModal(!modal);
    }


    return (
        <div>
                <Card>
                <CardTitle className="border-bottom p-3 mb-0">
                    <div className={styles.default.headerWrapper}>
                        <span>
                            <i className="mdi mdi-border-right mr-2"></i>Highlights Page Gallery Images
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
                            <i className="fa fa-plus" /> create new gallery images
                        </Button>
                    </div>
                </CardTitle>
                <Modal isOpen={modal} toggle={toggle.bind(null)}>
                        <ModalHeader toggle={toggle.bind(null)}>{obj.slider_caption === undefined?'Create new gallery images':'Edit existed gallery images'}</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={(event) => handleSubmit(event)}>
                            <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                            <FormGroup>
                                <Label for="height_ratio">Image height ratio</Label>
                                <Input type="number" name="height_ration" placeholder="Ex: 4" id="height_ration" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="width_ration">Image width ratio</Label>
                                <Input type="number" name="width_ration" placeholder="Ex: 4" id="width_ration" required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="order">Image Order</Label>
                                <Input type="number" name="order" placeholder="Ex: 1" id="order" required />
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

                <CardBody>
                <div className={styles.default.sliderWrapper}>
                    {
                        GalleryImages.map( item=> 
                            <SingleGalleryImageCard  width_ration={item.width_ration} id={item._id} img_src={`api/gallery/get-gallery-image/${item._id}/view`} height_ration={item.height_ration} order={item.order} />
                        )
                    }
                </div>
                </CardBody>
            </Card>
        
        </div>
    );
}

export default Gallery;