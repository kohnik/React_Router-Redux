import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Spinner} from "reactstrap";
import Header from "Comp/header";
import Home from "Comp/home";
import Posts from "Comp/posts";
import Users from "Comp/users";
import Page404 from "Comp/404";
import PostInside from "Comp/posts/itemInside";
import Message from "Comp/comments/message";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:null,
        }

    }

    render(){


        let {} = this.state;

        console.log(this.props)
        return(

            <Router>
                <Container>
                    <Header />

                    <Switch>
                        <Route exact path={"/"} component = {Home} />
                        <Route exact path={"/posts"} component = {()=><Posts title={333333}/>} />
                        <Route exact path={"/posts/id/:id"} component = {PostInside} />
                        <Route exact path={"/users"} component = {Users} />
                        <Route component = {Page404} />

                    </Switch>

                    {
                        this.props.message.active ?  <Message /> : null
                    }
                </Container>
            </Router>
        )
    }

    componentDidMount(){
        console.log("------componentDidMount");

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data=>data.json())
            .then(todos=>{
                    // let date =  this.randomDate(todos)
                    // this.setState({
                    //     items: [... date],
                    //     itemsCount : todos.length,
                    //     sortedItems:[... date],
                    // })
                })
            .catch(error=>console.log(error));

    }
}

const mapStateFromProps = (store)=>{


    return {
        message: store.message
    }
}


export default connect(mapStateFromProps)(App);