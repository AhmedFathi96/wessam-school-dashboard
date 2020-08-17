import React, { useState } from 'react';
import ReactTable from "react-table";
import {
    Card,
    CardBody,
    CardTitle,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import "../../../../node_modules/react-table/react-table.css";
import { IAdminUser } from '../../../lib';
import * as styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { createAdmin, editAdmin, deleteAdmin } from '../../../React-Redux/Actions/admin-action';

interface IProps{
    admins: IAdminUser[]
}
const AdminsTable: React.FC<IProps> = (props) => {

    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;
        let phone = event.target.phone.value;
        let password = event.target.password.value;
        let role = event.target.role.value;
        let newObj = {
            _id: obj._id,
            email: email,
            name:name,
            password: password,
            phone:phone,
            role:role
        }
        if(obj.name === undefined){
            dispatch(createAdmin(newObj));
        }else{
            dispatch(editAdmin({data:newObj, id:obj._id}))
        }
        setModal(!modal);
    }

    const data2 = props.admins.map((prop:IAdminUser) => {
        return {
            ...prop,
            actions: (
                <div className={styles.default.controlWrapper}>
                    <Button
                        onClick={() => {
                            // let obj = data2.find((o) => o.id === prop.id);
                            setModal(!modal);
                            setObj(prop);
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
                            dispatch(deleteAdmin(prop._id));
                            setObj(prop);
                        }}
                        color="danger"
                        size="sm"
                        round="true"
                        icon="true"
                    >
                        <i className="fa fa-trash" /> Delete
                    </Button>
                </div>
            )
        };
    });

    return <div>
        <Modal isOpen={modal} toggle={toggle.bind(null)}>
            <ModalHeader toggle={toggle.bind(null)}>{obj.name === undefined?'Create new admin':'Edit existed admin'}</ModalHeader>
            <ModalBody>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" placeholder="Ex: John Smith" id="name" defaultValue={obj.name} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" placeholder="Ex: info@example.com" id="email" defaultValue={obj.email} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input type="text" name="phone" placeholder="Ex: 01009839804" id="phone" defaultValue={obj.phone} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="text" name="password" placeholder="Ex: ********" id="password" defaultValue={obj.password} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input type="text" name="role" id="role" defaultValue={obj.role} required/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>
                        <Button color="secondary" className="ml-1" onClick={toggle.bind(null)}>Cancel</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>

        <Card>
            <CardTitle className="mb-0 p-3 border-bottom bg-light">
                <div className={styles.default.headerWrapper}>
                    <span>
                        <i className="mdi mdi-border-right mr-2"></i>Admins Table
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
                        <i className="fa fa-plus" /> Add new admin
                    </Button>
                </div>
            </CardTitle>
            <CardBody>
                <ReactTable
                    columns={[
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header: "Email",
                            accessor: "email"
                        },
                        {
                            Header: "Phone",
                            accessor: "phone"
                        },
                        {
                            Header: "Password",
                            accessor: "password"
                        },
                        {
                            Header: "Role",
                            accessor: "role"
                        },
                        {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false
                        }
                    ]}
                    defaultPageSize={15}
                    showPaginationBottom={true}
                    className="-striped -highlight table"
                    data={data2}
                />
            </CardBody>
        </Card>
        
        
    </div>
}

export default AdminsTable;
