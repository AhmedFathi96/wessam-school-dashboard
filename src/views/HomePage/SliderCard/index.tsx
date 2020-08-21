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

interface IProps{
    img_src:string;
    slider_caption: string;
    order: string;
    id:string;
}
const SingleImageCard:React.FC<IProps> = (props) => {
    const {img_src,slider_caption,order,id} = props;
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("caption",event.target.slider_caption.value);
        data.append("order",event.target.order.value);
        data.append("slider_img",event.target.img_src.files[0]);
        dispatch(editSliderItem({data:data , id: id}));
    
        setModal(!modal);
    }

    return (
        <div className={styles.default.card}>
            <Modal isOpen={modal} toggle={toggle.bind(null)}>
                <ModalHeader toggle={toggle.bind(null)}>{obj.slider_caption === undefined?'Create new slider':'Edit existed slider'}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={(event) => handleSubmit(event)}>
                        <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                        <FormGroup>
                            <Label for="slider_caption">Slider Caption</Label>
                            <Input type="textarea" rows="5" name="slider_caption" placeholder="Ex: The required text" id="caption" defaultValue={obj.slider_caption} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="order">Slider Order</Label>
                            <Input type="number" name="order" placeholder="Ex: 1" id="order" defaultValue={obj.order} required />
                        </FormGroup>
                        <FormGroup className="mb-1">
                            <Label for="name">Upload slider image</Label>
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
                        {slider_caption}
                    </CardHeader>
                    <CardSubtitle className="mb-0" style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{textAlign: 'left', marginTop:'1rem' , fontSize:'18px'}}>
                            slider order: {order}
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
                                    dispatch(deleteSliderItem(id));
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

export default SingleImageCard;