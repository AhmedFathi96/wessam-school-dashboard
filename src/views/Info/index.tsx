import React from "react";
import { useDispatch } from 'react-redux';
import { Card, CardTitle, Button, CardBody, Form, FormGroup, Label, Input } from "reactstrap";
import { IInfo } from "../../lib";
import { editInfo } from "../../React-Redux/Actions/info-action";

interface IProps{
    Info: IInfo;
}
const InfoComponent:React.FC<IProps> = (props) => {
    const {Info} = props;
    const dispatch = useDispatch();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const data = {
            address: event.target.address.value,
            company_name:  event.target.company_name.value,
            email:  event.target.email.value,
            facebook_url:  event.target.facebook_url.value,
            instagram_url:  event.target.instagram_url.value,
            map_url:  event.target.map_url.value,
            phone:  event.target.phone.value,
            twitter_url:  event.target.twitter_url.value,
            whatsapp_number:  event.target.whatsapp_number.value,
        }
        


        dispatch(editInfo({data: data,id: Info._id}))

    
    }

    return (
        <Card>
            <CardTitle className="mb-0 p-3 border-bottom bg-light">
                <i className="mdi mdi-border-right mr-2"></i>Info Table
            </CardTitle>
            <CardBody>
                <Form onSubmit={(event) => handleSubmit(event)}>
            
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" placeholder="Ex: Default" id="address" defaultValue={Info.address} required/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" placeholder="Ex: 01000012823" id="phone" defaultValue={Info.phone} required/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" placeholder="Ex: info@exmaple.com" id="email" defaultValue={Info.email} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="company_name">Company name</Label>
                        <Input type="text" name="company_name" placeholder="Ex: Company " id="company_name" defaultValue={Info.company_name}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="map_url">Map url</Label>
                        <Input type="text" name="map_url" placeholder="Ex: ......" id="map_url" defaultValue={Info.map_url}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="facebook_url">Facebook url</Label>
                        <Input type="text" name="facebook_url" placeholder="Ex: ......" id="facebook_url" defaultValue={Info.facebook_url}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="instagram_url">Instagram url</Label>
                        <Input type="text" name="instagram_url" placeholder="Ex: ....." id="instagram_url" defaultValue={Info.instagram_url}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="twitter_url">Twitter url</Label>
                        <Input type="text" name="twitter_url" placeholder="Ex: ....." id="twitter_url" defaultValue={Info.twitter_url}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="whatsapp_number">Whatsapp number</Label>
                        <Input type="text" name="whatsapp_number" placeholder="Ex: ....." id="whatsapp_number" defaultValue={Info.whatsapp_number}/>
                    </FormGroup>
                
                    
                
                    
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>
                    </FormGroup>
                </Form>
            
            </CardBody>
        </Card>

    );
}

export default InfoComponent;