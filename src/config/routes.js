import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import BladeMenu from '../layout/bladeMenu';
import Header from '../layout/Header';

const Routes = (props) => {
    console.log(`Props: ${props}`);
    return(
        <Route exact path='/' component={Header} />
    )
}

export default Routes;