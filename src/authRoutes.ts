import {lazy} from 'react';

const Register = lazy(() => import('./authentication/containers/Register'));
const Login = lazy(() => import('./authentication/containers/Login'));


const route = [
    { path: '/auth/signup', exact: true, name: 'Register', component: Register },
    { path: '/auth/signin', exact: true, name: 'Login', component: Login }
];

export default route;
