import {NativeModules} from 'react-native';

import {Location} from '../../types/location.ts';
const {LocationModule} = NativeModules;
interface LocationInterface {
  getCurrentLocation(): Promise<Location>;
}
export default LocationModule as LocationInterface;
