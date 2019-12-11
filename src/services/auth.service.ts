import SharedService from "./shared.service";
import Backend from "./backend.service";
import { StylistEndpoints } from "./endpoints";
import { StorageService } from './storage.service';

export const AuthService = {
    userAuth: async (body: any): Promise<string> => {
        try {
            const response = await Backend.request(StylistEndpoints.login, 'POST', body);
            SharedService.logger('login response', response);
            if (response.status === 201) {
                StorageService.saveToken(response.data.access_token);
                return response.data;
            }
            if (response.status === 401) return handleError(response);
        } catch (error) {
            SharedService.logger('login error', error.response);
            return handleError(error.response);
        }
        return '';
    },

    getBankBranches: async (bankCode: string) => {
        try {
            const response = await Backend.request(`${StylistEndpoints.branches}${bankCode}`, 'GET');
            SharedService.logger('getBankBranches response', response);
            if (response.status === 200) {
                return response.data;
            }
            return null;
        } catch (error) {
            SharedService.logger('getBankBranches error', error.response);
            return handleError(error.response);
        }
    },
    registerUser: async (body: any) => {
        try {
            const response = await Backend.request(StylistEndpoints.register, 'POST', body);
            SharedService.logger('user registration', response);
            if (response.status >= 200 && response.status < 300) {
                return ''
            }
            return handleError(response);
        } catch (error) {
            SharedService.logger('register user', error.response);
            return handleError(error.response);
        }
    },
};

const handleError = (res: any) => {
    try {
        const errorsKeys = Object.keys(res.data.message[0].constraints);
        return (res.data.message[0].constraints[errorsKeys[0]]);
    } catch (error) {
        return 'Something went wrong.';
    }
};
