import { ResponseType } from 'axios';
import { Buffer } from 'buffer';
import config from '../config';
import HttpService from './HttpService';

export default class ApiStorageService extends HttpService {

  protected readonly BASE_URL = config.url.storage;
  protected readonly RESPONSE_TYPE: ResponseType = 'arraybuffer';

  public async getPicture64(pictureName: string): Promise<string> {
    const pictureUrl = `${config.url.storage}/pics/${pictureName}`;
    const pictureBuffer = await this.get<ArrayBuffer>(pictureUrl);
    const base64 = Buffer.from(pictureBuffer).toString('base64');

    return `data:image/png;base64,${base64}`;
  }
}
