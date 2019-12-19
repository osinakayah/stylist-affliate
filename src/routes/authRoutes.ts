import {lazy} from 'react';

const Register = lazy(() => import('../containers/auth/Register'));
const Login = lazy(() => import('../containers/auth/Login'));
const VerifyAccount = lazy(() => import('../containers/auth/VerifyAccount'));



const route = [
    { path: '/', exact: true, name: 'Login', component: Login },
    { path: '/auth/signup', exact: true, name: 'Register', component: Register },
    { path: '/auth/signin', exact: true, name: 'Login', component: Login },
    { path: '/auth/verify/:token', exact: true, name: 'VerifyAccount', component: VerifyAccount }
];

export default route;
