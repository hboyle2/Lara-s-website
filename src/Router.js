import React from "react";
import { Switch, Route} from "react-router-dom";

import Navbar from './components/navbar';
import Porfolio from './components/Portfolio';
import HomePage from './components/HomePage'


export default (
    <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/navbar' component={ Navbar} />
        <Route path='/portfolio' component={Porfolio} />
    </Switch>
)