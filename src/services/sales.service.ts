import Backend from './backend.service';
import {StylistEndpoints} from "./endpoints";
import SharedService from "./shared.service";

const SalesService = {

    getSales: async (page: number, filter: string|null = null) => {
        try {
            let endpoint = `${StylistEndpoints.sales}?join=product&page=${page}`
            if (filter) {
                endpoint = `${StylistEndpoints.sales}?join=product&page=${page}&${filter}`
            }
            const response = await Backend.request(endpoint, 'GET');
            SharedService.logger('get sales', response);
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            return null;

        } catch (e) {
            SharedService.logger('get sales error', e.response);
            if (e.response.status === 401) Backend.handle401();
            return e.response.data;
        }
    },
};

export default SalesService
