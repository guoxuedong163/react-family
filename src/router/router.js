import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bundle from './bundle';
import Home from 'bundle-loader?lazy&name=home!pages/home/home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/page1/page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/counter/counter';
import UserInfo from 'bundle-loader?lazy&name=userinfo!pages/userinfo/userinfo';

const Loading = function () {
    return <div>loading...</div>
}

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component /> : <Loading />
        }
    </Bundle>
)

export default () => (
    <Router>
        <div>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/page1'>Page1 </Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/userinfo'>UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path='/' component={createComponent(Home)}></Route>
                <Route path='/page1' component={createComponent(Page1)}></Route>
                <Route path='/counter' component={createComponent(Counter)}></Route>
                <Route path='/userinfo' component={createComponent(UserInfo)}></Route>
            </Switch>
        </div>
    </Router>
)