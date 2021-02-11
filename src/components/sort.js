import React from "react";
import {  Row, Col , Button, ButtonGroup } from 'reactstrap';


export default function Sort(props) {
    return <Row className={"sort"}>
            <Col lg={12}>
                Сортировка : 
                <ButtonGroup>
                    <Button color={'danger'} onClick={()=>{
                        props.sortItems()
                    }}>all</Button>
                    <Button color={'success'} onClick={()=>{
                        props.sortItems(1);
                    }}>done</Button>
                    <Button color={'danger'} onClick={()=>{
                        props.sortItems(2)
                    }}>undone</Button>
                </ButtonGroup>
            </Col>
        </Row>
}