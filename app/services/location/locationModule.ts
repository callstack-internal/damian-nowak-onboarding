import {NativeModules} from 'react-native';

import {Location} from './locationModule.types.ts';
const {LocationModule} = NativeModules;
interface LocationInterface {
  getCurrentLocation(): Promise<Location>;
}
export default LocationModule as LocationInterface;
