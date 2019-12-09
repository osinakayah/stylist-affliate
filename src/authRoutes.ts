import {lazy} from 'react';

const Register = lazy(() => import('./containers/auth/Register'));
const Login = lazy(() => import('./containers/auth/Login'));


const route = [
    { path: '/', exact: true, name: 'Register', component: Register },
    { path: '/auth/signup', exact: true, name: 'Register', component: Register },
    { path: '/auth/signin', exact: true, name: 'Login', component: Login }
];

export default route;
