import Config from 'react-native-config';

export const getWeatherIconUrl = (code: string) => {
  return `${Config.API_ICON_URL}${code}.png`;
};
