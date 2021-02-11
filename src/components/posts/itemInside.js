import React from "react";
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Badge, Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, Spinner
} from 'reactstrap';

import {Link} from "react-router-dom";
import {connect} from "react-redux";


export default class PostInside extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            item:null
        }

    }

    render(){
        let {item} = this.state;
        console.log("postInside", this.props)
        return  <Card>
            {
                item !=null ?
                    <CardBody>
                        <CardTitle tag="div">
                            <Row>
                                <Col lg={8}>
                                    #{item.id}
                                    {item.title}
                                </Col>
                                <Col lg={12}>
                                    {item.body}
                                </Col>
                                <Col lg={12}>
                                    <Link to={"/posts"}><Button color={'success'}>К списку</Button></Link>
                                </Col>
                            </Row>
                        </CardTitle>
                    </CardBody> : <Spinner />

            }
        </Card>
    }

    modalToggle = () => {
        this.setState({
            modal : !this.state.modal
        })

    }



    componentDidMount() {
        let {id} = this.props.match.params;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((data)=>data.json())
            .then((item)=>this.setState({
                item:item
            }))

        // fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        //     .then((data)=>data.json())
        //     .then((item)=>this.setState({
        //         item:item
        //     }))
    }
}

