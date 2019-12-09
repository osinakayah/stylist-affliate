import {lazy} from 'react';
const Products = lazy(() => import('./containers/products/Products'));
const Profile = lazy(() => import('./containers/profile/Profile'));


const routes = [
    { path: '/product', exact: true, name: 'Products', component: Products },
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;
