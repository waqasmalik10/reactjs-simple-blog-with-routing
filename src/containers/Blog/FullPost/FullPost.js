import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios'

class FullPost extends Component {
    state = {
        loadPost: null
    }

    componentDidMount() {
        console.log('[FullPost.js] props = ' , this.props);
        if( (!this.state.loadPost && this.props.match.params.id) || (this.props.match.params.id && this.state.loadPost && this.props.match.params.id !== this.state.loadPost.id) ) {
            axios.get("posts/" + this.props.match.params.id)
                .then(response => {
                    this.setState({loadPost: response.data});
                    console.log(response);
                });
        }
        
    }

    deletePostHandler = () => {
        axios.delete("posts/" + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if(this.props.match.params.id) {
            post = <p style={{textAlign: "center"}}>Loading...</p>;
        }
        if(this.state.loadPost) {
            post = (
                <div className="FullPost">
                <h1>{this.state.loadPost.title}</h1>
                <p>{this.state.loadPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={() => this.deletePostHandler(this.state.loadPost.id)}>Delete</button>
                    </div>
                </div>
    
            );
        }        
        return post;
    }
}

export default FullPost;