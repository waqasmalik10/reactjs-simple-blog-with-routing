import React, { Component } from 'react';
import axios from '../../axios'
import Posts from '../Blog/Posts/Posts'
import {Route, NavLink} from 'react-router-dom';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                activeStyle={{color: "#fa923f", textDecoration: "underline"}}
                                activeClassName="my-active"
                                to="/" 
                                exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    exact 
                                    to={{
                                    pathname: '/new-post',
                                    // pathname: this.props.match.url + '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <Posts/>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;