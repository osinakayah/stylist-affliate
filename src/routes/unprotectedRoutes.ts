import {lazy} from 'react';


const ProductDetail = lazy(() => import('../containers/products/ProductDetail'));

const route = [
    { path: '/product/:affiliateId/:productId', exact: true, name: 'Product Detail', component: ProductDetail },

];

export default route;
