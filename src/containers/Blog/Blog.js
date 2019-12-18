import React, { Component } from 'react';
import axios from '../../axios'
import Posts from '../Blog/Posts/Posts'
import {Route} from 'react-router-dom';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    render () {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <Posts/>} />
            </div>
        );
    }
}

export default Blog;