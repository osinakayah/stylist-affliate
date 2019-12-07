import {lazy} from 'react';
const Profile = lazy(() => import('./profile/containers/Profile'));


const routes = [
    { path: '/profile', exact: true, name: 'Profile', component: Profile },
];

export default routes;
