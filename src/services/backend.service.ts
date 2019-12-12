import Axios, { Method } from 'axios';
import { StorageService } from './storage.service';

const baseHost = 'http://localhost:3000/';
export const baseUrl = `${baseHost}api/`;

const Backend =  {

    multiPathFormRequest: async(endpoint: string, formData: FormData) => {
        const setHeader = () => {
            const header = { };
            const token = StorageService.getToken();
            return token ? { ...header, 'Authorization': `Bearer ${token}` } : header;
        };

        try {
            // const res =  await Axios.post(endpoint, formData, setHeader());
            const res = await Axios({
                url: baseUrl + endpoint,
                method: 'POST',
                data: formData,
                headers: setHeader()
            });
            if (res.status === 401) Backend.handle401();
            return res;
        }
        catch (e) {
            console.log('backend error', e.response);

            return e.response;
        }
    },

    request: async (endpoint: string, methodType: Method, body?: any) => {
        const setHeader = () => {
            const header = { 'Content-Type': 'application/json' };
            const token = StorageService.getToken();
            return token ? { ...header, 'Authorization': `Bearer ${token}` } : header;
        };

        try {
            const res = await Axios({
                url: baseUrl + endpoint,
                method: methodType,
                data: body,
                headers: setHeader()
            });
            if (res.status === 401) Backend.handle401();
            return res;
        } catch (e) {
            console.log('backend error', e.response);

            return e.response;
        }
    },
    handle401: () => {
        StorageService.removeToken();
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }
};

export default Backend
