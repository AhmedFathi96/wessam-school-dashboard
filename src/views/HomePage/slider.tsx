import React, { useState, useEffect } from "react";
import img1 from '../../assets/images/big/img1.jpg';
import * as styles from './styles.module.css';
import SingleImageCard from "./SliderCard";
import { CardBody, Card, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Label } from "reactstrap";
import { useDispatch } from "react-redux";
import { createSliderItem, getSliderItems } from "../../React-Redux/Actions/slider-action";
import { useSelect } from "../../helper";

const HomeSlider:React.FC = () => {

    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const {SliderItems} = useSelect(state => state.sliderItemsReducer);
    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData();
        data.append("caption",event.target.slider_caption.value);
        data.append("order",event.target.order.value);
        data.append("slider_img",event.target.img_src.files[0]);
        dispatch(createSliderItem(data));
        setModal(!modal);
    }
    useEffect(()=>{
        dispatch(getSliderItems());
    },[])
    return (
        <div>
                <Card>
                <CardTitle className="border-bottom p-3 mb-0">
                    <div className={styles.default.headerWrapper}>
                        <span>
                            <i className="mdi mdi-border-right mr-2"></i>Home Page Images Slider
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
                            <i className="fa fa-plus" /> create new slider
                        </Button>
                    </div>
                </CardTitle>
                <Modal isOpen={modal} toggle={toggle.bind(null)}>
                        <ModalHeader toggle={toggle.bind(null)}>{obj.slider_caption === undefined?'Create new slider':'Edit existed slider'}</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={(event) => handleSubmit(event)}>
                                <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                                <FormGroup>
                                    <Label for="slider_caption">Slider Caption</Label>
                                    <Input type="textarea" rows="5" name="slider_caption" placeholder="Ex: hello bitches" id="caption" defaultValue={obj.slider_caption} required />
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

                <CardBody>
                <div className={styles.default.sliderWrapper}>
                    {
                        SliderItems.map( item=> 
                            <SingleImageCard id={item._id} img_src={`http://localhost:5026/api/slider/get-slider-image/${item._id}/view`} slider_caption={item.caption} order={item.order} />
                        )
                    }
                </div>
                </CardBody>
            </Card>
        
        </div>
    );
}

export default HomeSlider;