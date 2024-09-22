import Reactotron from 'reactotron-react-native';
import { ReactotronReactNative } from 'reactotron-react-native';
// success-line
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {mmkvStorage} from './src/services/storage';

Reactotron.configure({}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(mmkvPlugin<ReactotronReactNative>({ storage: mmkvStorage }))
  .connect(); // let's connect!
