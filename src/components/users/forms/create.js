import React from "react";
import {
    Row, Col,
    Form, FormGroup, Label, Input, Button
} from 'reactstrap';


import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";

export default class CreateUserForm extends React.Component {

    constructor(props) {
        super(props);
        this.my = React.createRef();
        this.state = {
            modal : false,
            user:null
        }

    }

    render(){
        let {fnOk,fnCancel} = this.props;
        return  <Form onSubmit={this.submit}>
            <FormGroup >
                <Label for="name">Name</Label>
                <input ref={this.my} type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <Label for="username">UserName</Label>
                <Input type="text" name="username" id="username" placeholder="UserName" />
            </FormGroup>
            <FormGroup>
                <Button>Add</Button>
                <span onClick={fnCancel} className={"btn btn-danger"}>Cancel</span>
            </FormGroup>


        </Form>
    }

    submit = (e) =>{

        e.preventDefault();
        console.log('A name was submitted: ' + this.my.current.value);
        let data = new FormData(e.target);
            data.set("some",11111);
        // if(data.get("name")!="" && data.get("username")!="" ) {
        //     fetch("https://jsonplaceholder.typicode.com/users",{
        //         method:"POST"
        //     }).then(response=>{
        //         console.log("-----response", response)
        //         this.props.fnOk(data);
        //     }).catch(error=>console.error("-----response", error))
        //
        //     //fnOk(data);
        // }
    }




}