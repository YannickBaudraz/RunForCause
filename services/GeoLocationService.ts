import HttpService from './HttpService';

export default class GeoLocationService extends HttpService {

  public async sendPosition(params: SendPositionParams): Promise<string> {
    return await this.post<string>('/location', params);
  }

  public async deleteAllPositions(): Promise<string> {
    return await this.delete<string>('/location');
  }
}

export type SendPositionParams = {
  lat: number;
  long: number;
}
