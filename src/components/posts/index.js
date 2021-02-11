import React, {Component} from "react";
import PostItem from "./item";
import {Spinner} from "reactstrap";
import {connect} from "react-redux";

class Posts extends Component{

    constructor(props){
        super(props);


    }

    render(){
        let {posts} = this.props;
        if(this.props.message.active)
        {
            console.log("LOlkekCHEBUREK")
        }
        return(
            <div className={"dddddd22222"}>
                <h1>Posts</h1>
                {
                    posts.length>0 ?
                        posts.map((item)=><PostItem info={item} key={item.id}/>)  :
                        <Spinner />
                }
            </div>
        )
    }


    
    componentDidMount(){

        if(this.props.posts.length==0) {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(data=>data.json())
                .then(posts=>{
                    this.props.dispatch({
                        type : "ADD_LIST",
                        data : [...posts]
                    })


                })
                .catch(error=>console.log(error));
        }


    }




}

const mapStateFromProps = (store)=>{


    return {
        posts: store.posts,
        message: store.message
    }
}


export default connect(mapStateFromProps)(Posts);