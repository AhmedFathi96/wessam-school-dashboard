import React, { useState } from 'react';
import ReactTable from "react-table";
import {
    Card,
    CardBody,
    CardTitle,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import "../../../../node_modules/react-table/react-table.css";
import { IStudent } from '../../../lib';
import * as styles from './style.module.css'
import { useDispatch } from 'react-redux';
import { createStudent, editStudent, deleteStudent } from '../../../React-Redux/Actions/student-action';

interface IProps{
    students: IStudent[]
}
const StudentsTable: React.FC<IProps> = (props) => {

    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }
    
    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        let id = event.target.id.value;
        let name = event.target.name.value;
        let email = event.target.email.value;
        let parent_name = event.target.parent_name.value;
        let parent_phone = event.target.parent_phone.value;
        let student_phone = event.target.student_phone.value;
        let address = event.target.address.value;
        let course = event.target.course.value;
        let grade = event.target.grade.value;
        let status = event.target.status.value;

        let newObj: IStudent = {
            _id: obj._id,
            name:name,
            email:email,
            parent_name:parent_name,
            grade:grade,
            student_phone:student_phone,
            parent_phone:parent_phone,
            address:address,
            course:course,
            status:status
        }

        if(obj.name === undefined){
            dispatch(createStudent(newObj));
        }else{
            dispatch(editStudent({data:newObj, id:obj._id}))
        }
        setModal(!modal);
    }

    const data2 = props.students.map((prop:IStudent) => {
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
                        <i className="fa fa-edit" />
                    </Button>

                    <Button
                        onClick={() => {
                            dispatch(deleteStudent(prop._id));
                            setObj(prop);
                        }}
                        color="danger"
                        size="sm"
                        round="true"
                        icon="true"
                    >
                        <i className="fa fa-trash" />
                    </Button>
                </div>
            )
        };
    });

    return <div>
        <Modal isOpen={modal} toggle={toggle.bind(null)}>
            <ModalHeader toggle={toggle.bind(null)}>{obj.name === undefined?'Create new Student':'Edit existed Student'}</ModalHeader>
            <ModalBody>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" placeholder="Ex: John Smith" id="name" defaultValue={obj.name} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Parent Name</Label>
                        <Input type="text" name="parent_name" placeholder="Ex: Smith Ise" id="parent_name" defaultValue={obj.parent_name} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleCustomSelect">Grade</Label>
                        <Input type="select" name="grade" id="grade" defaultValue={obj.grade} required>
                            <option value="default">Select your grade</option>
                            <option value="grade1">Grade 1</option>
                            <option value="grade2">Grade 2</option>
                            <option value="grade3">Grade 3</option>
                            <option value="grade4">Grade 4</option>
                            <option value="grade5">Grade 5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Email</Label>
                        <Input type="text" name="email" placeholder="Ex: example@info.com" id="email" defaultValue={obj.email} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Course</Label>
                        <Input type="select" name="course" id="course" defaultValue={obj.course} required>
                            <option value="default">Select your course</option>
                            <option value="course1">Course 1</option>
                            <option value="course2">Course 2</option>
                            <option value="course3">Course 3</option>
                            <option value="course4">Course 4</option>
                            <option value="course5">Course 5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Phone Number</Label>
                        <Input type="text" name="student_phone" placeholder="Ex: 01009839804" id="student_phone" defaultValue={obj.student_phone} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Parent Phone Number</Label>
                        <Input type="text" name="parent_phone" placeholder="Ex: 01009839804" id="parent_phone" defaultValue={obj.parent_phone} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Address</Label>
                        <Input type="text" name="address" placeholder="Ex: Nasr city,Cairo" id="address" defaultValue={obj.address} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input type="select" name="status" id="status" defaultValue={obj.status} required>
                            <option value="default">Select student status</option>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </Input>
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
                        <i className="mdi mdi-border-right mr-2"></i>Students Table
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
                        <i className="fa fa-plus" /> Add new Student
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
                            Header: "Parent Name",
                            accessor: "parent_name"
                        },
                        {
                            Header: "Grade",
                            accessor: "grade"
                        },
                        {
                            Header: "Email",
                            accessor: "email"
                        },
                        {
                            Header: "Course",
                            accessor: "course"
                        },
                        {
                            Header: "Phone Number",
                            accessor: "student_phone"
                        },
                        {
                            Header: "Parent phone number",
                            accessor: "parent_phone"
                        },
                        {
                            Header: "Address",
                            accessor: "address"
                        },
                        {
                            Header: "Status",
                            accessor: "status"
                        },
                        {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false
                        }
                    ]}
                    defaultPageSize={20}
                    showPaginationBottom={true}
                    className="-striped -highlight table"
                    data={data2}
                    filterable
                />
            </CardBody>
        </Card>
        
        
    </div>
}

export default StudentsTable;
