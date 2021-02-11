import React, {Component} from "react";

export default class Home extends Component{

    constructor(props){
        super(props);


    }

    render(){
        return(
            <h1>Home</h1>
        )
    }

    // componentDidMount(){
    //     console.log("------componentDidMount");
    //
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then(data=>data.json())
    //         .then(todos=>{
    //             // let date =  this.randomDate(todos)
    //             // this.setState({
    //             //     items: [... date],
    //             //     itemsCount : todos.length,
    //             //     sortedItems:[... date],
    //             // })
    //         })
    //         .catch(error=>console.log(error));
    //
    // }




}