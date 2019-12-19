import React, { Component } from 'react';
import Posts from '../Blog/Posts/Posts'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
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
                                to="/posts" 
                                exact>Posts</NavLink>
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
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/" exact component={Posts} /> */}
                    <Route render={() => <h3>Not found</h3>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;