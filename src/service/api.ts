import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

class ApiService {
    private static instance: ApiService;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.initializeInterceptors();
    }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    private initializeInterceptors() {
        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                this.handleError();
                return Promise.reject(error);
            }
        );
    }

    private handleError() {
        toast.error('An error occurred. Please try again.');
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.get<T>(url, config).then((response) => response.data);
    }
}

export const apiService = ApiService.getInstance();
