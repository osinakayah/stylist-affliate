import {lazy} from 'react';
const Products = lazy(() => import('./products/containers/Products'));
const Profile = lazy(() => import('./profile/containers/Profile'));


const routes = [
    { path: '/product', exact: true, name: 'Products', component: Products },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;
