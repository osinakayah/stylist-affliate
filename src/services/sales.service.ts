import Backend from './backend.service';
import {StylistEndpoints} from "./endpoints";
import SharedService from "./shared.service";
import {StorageService} from "./storage.service";
import {StorageKeys} from "./StorageKeys";

const SalesService = {

    getSales: async (page: number, filter: string|null = null) => {
        try {
            let endpoint = `${StylistEndpoints.sales}?join=product&page=${page}&join=user`
            if (filter) {
                endpoint = `${StylistEndpoints.sales}?page=${page}&join=product&join=user&${filter}`
            }
            const isAdmin: boolean = StorageService.getData(StorageKeys.userType) === 'admin';
            if (!isAdmin) {
                const id = StorageService.getData(StorageKeys.id)
                endpoint += `&filter=user.id||eq||${id}`
            }

            const response = await Backend.request(endpoint, 'GET');
            SharedService.logger('get sales', response);
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            if (response.status === 401) Backend.handle401();
            return null;

        } catch (e) {
            SharedService.logger('get sales error', e.response);
            if (e.response.status === 401) Backend.handle401();
            return e.response.data;
        }
    },
};

export default SalesService
