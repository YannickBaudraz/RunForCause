import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageStatic } from '@react-native-async-storage/async-storage/lib/typescript/types';

export default class LocalStorageService {

  private readonly storage: AsyncStorageStatic = AsyncStorage;

  public async get(key: string): Promise<string | null> {
    return this.storage.getItem(key);
  }

  public async set(key: string, value: string): Promise<void> {
    return this.storage.setItem(key, value);
  }
}
