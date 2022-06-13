import HttpService from './HttpService';

export default class GeoLocationService extends HttpService {

  public async sendPosition(params: SendPositionParams): Promise<string> {
    return await this.post<string>('/location', params);
  }
}

export type SendPositionParams = {
  lat: number;
  long: number;
}
