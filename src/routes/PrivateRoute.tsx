import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {StorageService} from "../services/storage.service";

export default (props: any) => {

    const {component: InnerComponent, ...rest} = props;
    const {location} = props;
    const token = StorageService.getToken();
    return (
        <Route {...rest} render={props => (token ? <InnerComponent {...props}/> :
            <Redirect to={{pathname: '/auth/signin', state: {from: location}}}/>)}/>
    );
}

