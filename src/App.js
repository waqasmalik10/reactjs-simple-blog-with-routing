import React, { Component, Fragment, Suspense } from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import Welcome from './containers/Welcome';
import User from './containers/User';
// import Posts from './containers/Posts';
const Posts = React.lazy(() => import('./containers/Posts'));
// import Blog from './containers/Blog/Blog';

class App extends Component {
  state = {
    show: false
  }

  modeHandler = () => {
    this.setState(prevState => {
      return {show: !prevState.show}
    }
    );
  }
  render() {
    return (
      <Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {this.state.show ? <Suspense fallback={<div>Loading...</div>}><Posts /></Suspense> : <User/>}
      </Fragment>
      // <BrowserRouter>
      // <Fragment>
      //   <nav>
      //     <NavLink to="/user">User Page</NavLink> | &nbsp;
      //     <NavLink to="/posts">Posts Page</NavLink>
      //   </nav>
      //   <Route path="/" exact component={Welcome} />
      //   <Route path="/user" component={User} />
      //   <Route 
      //     path="/posts" 
      //     render={() => <Suspense fallback={<div>Loading...</div>}><Posts /></Suspense>} />
      //   </Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
