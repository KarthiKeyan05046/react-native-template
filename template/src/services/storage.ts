import {MMKV} from 'react-native-mmkv';

interface Storage {
  getItem(key: string, ...args: Array<any>): any;
  setItem(key: string, value: any, ...args: Array<any>): any;
  removeItem(key: string, ...args: Array<any>): any;
}


export const mmkvStorage = new MMKV();

const storage: Storage = {
  setItem: (key, value) => {
    mmkvStorage.set(key, value);
  },
  getItem: key => {
    const value = mmkvStorage.getString(key);
    return value;
  },
  removeItem: key => {
    mmkvStorage.delete(key);
  },
};

export default storage;
