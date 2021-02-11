import React from "react";
import {  Row, Col , Button, ButtonGroup } from 'reactstrap';
import {Link} from "react-router-dom";


export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <Row className={"header"}>
            <Col lg={12}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/posts"}>Posts</Link></li>
                    <li><Link to={"/users"}>Users</Link></li>

                </ul>
            </Col>


        </Row>
    }

}