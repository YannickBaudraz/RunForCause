import User from '../model/User';
import HttpService from './HttpService';

export default class UserService extends HttpService {

  public async getCurrentUser(): Promise<User> {
    return await this.get<User>('/me');
  }

  public async login(params: LoginParams): Promise<string> {
    const token = await this.post<string>('/mytoken', params);
    await this.storageService.set('token', token);

    return token;
  }

  public async updateProfile(params: UpdateProfileParams): Promise<void> {
    await this.patch('/profile', params);
  }
}

export type LoginParams = {
  username: string;
  password: string;
}

export type UpdateProfileParams = {
  name?: string;
  email?: string;
  phone?: string;
  picture?: string;
}
