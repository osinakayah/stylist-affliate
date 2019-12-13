import Backend from './backend.service';
import {StylistEndpoints} from "./endpoints";
import SharedService from "./shared.service";

const ProductService = {

    getProduct: async (productId: number) => {
        try {
            const response = await Backend.request(`${StylistEndpoints.products}/${productId}`, 'get');
            SharedService.logger('get product', response);
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            return null;

        } catch (e) {
            SharedService.logger('get product error', e.response);
            return e.response.data;
        }
    },


    getProducts: async (page: number) => {
        try {
            const response = await Backend.request(`${StylistEndpoints.products}?page=${page}`, 'get');
            SharedService.logger('get products', response);
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            if (response.status === 401) Backend.handle401();
            return null;

        } catch (e) {
            SharedService.logger('get products error', e.response);
            if (e.response.status === 401) Backend.handle401();
            return e.response.data;
        }
    },

    createProduct: async (formData: FormData) => {
       try {
           const response = await Backend.multiPathFormRequest(`${StylistEndpoints.products}`, formData);
           SharedService.logger('create products', response);
           if (response.status >= 200 && response.status < 300) {
               return "Product Created";
           }
           if (response.status === 401) Backend.handle401();

           return response.statusText;
       } catch (e) {
           SharedService.logger('create products error', e.response);
           if (e.response.status === 401) Backend.handle401();
           return e.response.data;
       }
    }
};

export default ProductService
