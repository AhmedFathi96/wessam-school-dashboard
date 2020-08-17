import React, { useState } from 'react';
import ReactTable from "react-table";
import {
    Card,
    CardBody,
    CardTitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    FormGroup,
    Label
} from 'reactstrap';
import "../../../../node_modules/react-table/react-table.css";
import { ICourse } from '../../../lib';
import * as styles from './style.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../React-Redux/Actions/contact-action';
import { createCourse, editCourse, deleteCourse } from '../../../React-Redux/Actions/courses-action';

interface IProps{
    Courses: ICourse[]
}
const CoursesTable: React.FC<IProps> = (props) => {

    const [modal, setModal] = useState(false);
    const [obj, setObj] = useState<any>({});


    const toggle = () => {
        setModal(!modal);
    }
    
    const dispatch = useDispatch();
    const handleSubmit = (event: any) => {
        
        event.preventDefault();

        let course_type = event.target.course_type.value;
        let price = event.target.price.value;
        let desc = event.target.desc.value;
        let plane_name = event.target.plane_name.value;
        let bullet1 = event.target.bullet1.value;
        let bullet2 = event.target.bullet2.value;
        let bullet3 = event.target.bullet3.value;
        let bullet4 = event.target.bullet4.value;
        let bullet5 = event.target.bullet5.value;



        let newObj: ICourse = {
            _id: obj._id,
            course_type: course_type,
            desc: desc,
            price: price,
            plane_name:plane_name,
            bullet1: bullet1,
            bullet2: bullet2,
            bullet3: bullet3,
            bullet4: bullet4,
            bullet5: bullet5
        }

        if(obj.price === undefined){
            dispatch(createCourse(newObj));
        }else{
            dispatch(editCourse({data:newObj, id:obj._id}))
        }
        setModal(!modal);
    }



    const data2 = props.Courses.map((prop:ICourse) => {
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
                            dispatch(deleteCourse(prop._id));
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
            <ModalHeader toggle={toggle.bind(null)}>{obj.price === undefined?'Create new Course':'Edit existed Course'}</ModalHeader>
            <ModalBody>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Input type="hidden" name="id" id="id" defaultValue={obj.id} />
                    <FormGroup>
                        <Label for="exampleCustomSelect">Courses type</Label>
                        <Input type="select" name="course_type" id="course_type" defaultValue={obj.course_type} required>
                            <option value="default">Select your grade</option>
                            <option value="featured">Featured</option>
                            <option value="default">Default</option>
                        </Input>
                    </FormGroup>
                
                    <FormGroup>
                        <Label for="plane_name">Plane Name</Label>
                        <Input type="text" name="plane_name" placeholder="Ex: Default" id="plane_name" defaultValue={obj.plane_name} required/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input type="text" name="price" placeholder="Ex: 1500 $" id="price" defaultValue={obj.price} required/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="desc">Description</Label>
                        <Input type="text" name="desc" placeholder="Ex: Featured or Default" id="desc" defaultValue={obj.desc} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bullet1">Bullet1</Label>
                        <Input type="text" name="bullet1" placeholder="Ex: Bullet1" id="bullet1" defaultValue={obj.bullet1}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bullet1">Bullet2</Label>
                        <Input type="text" name="bullet2" placeholder="Ex: Bullet2" id="bullet2" defaultValue={obj.bullet2}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bullet1">Bullet3</Label>
                        <Input type="text" name="bullet3" placeholder="Ex: Bullet3" id="bullet3" defaultValue={obj.bullet3}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bullet1">Bullet4</Label>
                        <Input type="text" name="bullet4" placeholder="Ex: Bullet4" id="bullet4" defaultValue={obj.bullet4}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bullet5">Bullet5</Label>
                        <Input type="text" name="bullet5" placeholder="Ex: Bullet5" id="bullet5" defaultValue={obj.bullet5}/>
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
                        <i className="mdi mdi-border-right mr-2"></i>Courses Table
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
                        <i className="fa fa-plus" /> Add new course
                    </Button>
                </div>
            </CardTitle>
            <CardBody>
                <ReactTable
                    columns={[
                        {
                            Header: "Plane Name",
                            accessor: "plane_name"
                        },
                        {
                            Header: "Course type",
                            accessor: "course_type"
                        },
                        {
                            Header: "Price",
                            accessor: "price"
                        },
                        {
                            Header: "Description",
                            accessor: "desc"
                        },
                        {
                            Header: "bullet1",
                            accessor: "bullet1"
                        },
                        {
                            Header: "bullet2",
                            accessor: "bullet2"
                        },
                        {
                            Header: "bullet3",
                            accessor: "bullet3"
                        },
                        {
                            Header: "bullet4",
                            accessor: "bullet4"
                        },
                        {
                            Header: "bullet5",
                            accessor: "bullet5"
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

export default CoursesTable;
