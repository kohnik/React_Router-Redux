import React from "react";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import {Link} from "react-router-dom";

import { FaTrashAlt, FaEdit, FaInfo } from "react-icons/fa";

export default class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            user:null
        }

    }

    render(){
        let {info} = this.props;
        let {modal,user} = this.state;
        return  <Card>
            <CardBody>
                <CardTitle tag="div">
                    <Row>
                        <Col lg={8}>
                            #{info.id}
                            <Link to={`/users/id/${info.id}`}>{info.name} {info.username}</Link>
                        </Col>
                    </Row>



                    {/*<div>*/}
                    {/*    <ButtonGroup>*/}
                    {/*        <Button color={'primary'} onClick={()=>this.props.message(info.id,"Хотите удалить ?",this.props.remove)}><FaTrashAlt /></Button>*/}
                    {/*        <Button color={'success'}><FaEdit /></Button>*/}
                    {/*        <Button color={'danger'} onClick={this.modalToggle}><FaInfo   /></Button>*/}
                    {/*    </ButtonGroup>*/}

                    {/*</div>*/}
                </CardTitle>
            </CardBody>

        </Card>
    }

    modalToggle = () => {
        this.setState({
            modal : !this.state.modal
        })

    }

    // remove = () =>{
    //         //if()
    //         //fetch
    //     this.props.remove(this.props.info.id);
    // }

    componentDidMount() {
        // fetch(`https://jsonplaceholder.typicode.com/users/${this.props.info.userId}`)
        //     .then(data=>data.json())
        //     .then(user=>this.setState({
        //         user:user
        //     }))
    }
}