import Backend from './backend.service';
import {StylistEndpoints} from "./endpoints";
import SharedService from "./shared.service";

const ProductService = {

    getProducts: async (page: number) => {
        try {
            const response = await Backend.request(`${StylistEndpoints.products}?page=${page}`, 'get');
            SharedService.logger('get products', response);
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            return null;

        } catch (e) {
            SharedService.logger('get products error', e.response);
            if (e.response.status === 401) Backend.handle401();
            return e.response.data;
        }
    },
};

export default ProductService
