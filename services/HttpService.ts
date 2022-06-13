import axios, { AxiosStatic, ResponseType } from 'axios';
import config from '../config';
import LocalStorageService from './LocalStorageService';

export default abstract class HttpService {

  protected readonly BASE_URL = config.url.api;
  protected readonly RESPONSE_TYPE?: ResponseType;

  protected readonly storageService: LocalStorageService = new LocalStorageService();
  protected readonly http: AxiosStatic = axios;

  private get instance(): Promise<AxiosStatic> {
    return new Promise<AxiosStatic>(async (resolve) => {
      this.http.defaults.baseURL = this.BASE_URL;
      this.http.defaults.responseType = this.RESPONSE_TYPE;
      this.http.defaults.headers.common.Authorization = await this.getBearerHeader();

      resolve(this.http);
    });
  }

  protected async get<T>(url: string): Promise<T> {
    const instance = await this.instance;
    const response = await instance.get<T>(url);

    return response.data;
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    const instance = await this.instance;
    const response = await instance.post<T>(url, data);

    return response.data;
  }

  protected async patch<T>(url: string, data: any): Promise<T> {
    const instance = await this.instance;
    const response = await instance.patch<T>(url, { _method: 'PATCH', ...data });

    return response.data;
  }

  private async getBearerHeader(): Promise<string> {
    return `Bearer ${await this.getToken()}`;
  }

  private async getToken(): Promise<string | null> {
    return await this.storageService.get('token');
  }
}
