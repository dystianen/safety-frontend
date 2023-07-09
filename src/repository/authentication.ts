import {http} from "@/utils/http";

const url = {
    login: () => "/auth/login",
    register: () => "/auth/register",
};

const hooks = {};

const api = {
    async login(data: any) {
        return await http.post(url.login(), data);
    },
    async register(data: any) {
        return await http.post(url.register(), data)
    }
};

export const authenticationRepository = {
    url,
    hooks,
    api,
};
