import React, { useState } from 'react';
import ReactTable from "react-table";
import {
    Card,
    CardBody,
    CardTitle,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import "../../../../node_modules/react-table/react-table.css";
import { IContactMessage } from '../../../lib';
import * as styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../React-Redux/Actions/contact-action';

interface IProps{
    contacts: IContactMessage[]
}
const ContactsTable: React.FC<IProps> = (props) => {

    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }

    const dispatch = useDispatch();


    const data2 = props.contacts.map((prop:IContactMessage) => {
        return {
            ...prop,
            actions: (
                <div className={styles.default.controlWrapper}>
                    <Button
                        onClick={() => {
                            // let obj = data2.find((o) => o.id === prop.id);
                            setModal(!modal);
                            setObj(prop);
                            console.log('message ====>' , prop.message)
                        }}
                        color="success"
                        size="sm"
                        round="true"
                        icon="true"
                    >
                        <i className="fa fa-edit" /> View
                    </Button>

                    <Button
                        onClick={() => {
                            dispatch(deleteContact(prop._id));
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
            <ModalHeader toggle={toggle.bind(null)}>{obj.first_name} {obj.last_name}'s Message</ModalHeader>
            <ModalBody>
                <span>{obj.message}</span>
            </ModalBody>
        </Modal>

        <Card>
            <CardTitle className="mb-0 p-3 border-bottom bg-light">
                <div className={styles.default.headerWrapper}>
                    <span>
                        <i className="mdi mdi-border-right mr-2"></i>Contacts Table
                    </span>
                </div>
            </CardTitle>
            <CardBody>
                <ReactTable
                    columns={[
                        {
                            Header: "First Name",
                            accessor: "first_name"
                        },
                        {
                            Header: "Last Name",
                            accessor: "last_name"
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

export default ContactsTable;
