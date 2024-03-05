import {useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CitiesListScreen from '../features/weather/CitiesListScreen.tsx';
import CityDetailsScreen from '../features/weather/CityDetailsScreen.tsx';
import {Routes} from './Navigation.routes.ts';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={Routes.CitiesList}>
        <Stack.Screen
          name={Routes.CitiesList}
          component={CitiesListScreen}
          options={{title: 'Weather'}}
        />
        <Stack.Screen
          name={Routes.CityDetails}
          component={CityDetailsScreen}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
