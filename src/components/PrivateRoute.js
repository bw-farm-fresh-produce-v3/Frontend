import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProduceList } from '../components/ProduceList';

function PrivateRoute(props) {
    const {
        component: Component,
        ...rest
    } = props

    return(
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem('token')) {
                return <ProduceList {...renderProps} />
            }else {
                return <Redirect to='/produce' />
        }
    }} />
    )
}

export default PrivateRoute