import axios from 'axios';

const API_BASE_URL = 'https://jogtracker.herokuapp.com/api/v1';
const LOGIN_URL = 'https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin';

export class RequestService {

    constructor() {
        const service = axios.create({
            baseURL: API_BASE_URL,
        });

        service.interceptors.request.use(config => {
            const token = localStorage.getItem('token') || '';

            config.headers['Content-type'] = 'application/json; charset=UTF-8';

            if (config.url !== LOGIN_URL) {
                config.headers.Authorization = `Bearer ${token}`
            }

            if (config.data instanceof FormData) {
                Object.assign(config.headers, { 'Content-Type': 'application/x-www-form-urlencoded' })
            }

            return config
        });

        this.service = service
    }

    get(path, params) {
        return this.service.get(path, { params }).then(response => response.data.response)
    };

    patch = (path, data) => {
        return this.service.patch(path, data).then(response => response.data.response)
    };

    post = (
        path,
        data,
        withHeaders,
    ) => {
        return this.service.post(path, data).then(response => {
            return withHeaders ? { data: response.data, headers: response.headers } : response.data.response
        })
    };

    put = (path, data) => {
        return this.service.put(path, data).then(response => response.data.response)
    };

    delete = (path) => {
        return this.service.delete(path).then(response => response.data.response)
    };

}

