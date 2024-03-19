import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import {Routes} from './Navigation.routes.ts';
import CitiesListScreen from '../features/cities/CitiesList/CitiesListScreen.tsx';
import CityDetailsScreen from '../features/cities/CityDetails/CityDetailsScreen.tsx';
import {getNavigationTheme} from '../theme/theme.utils.ts';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer theme={getNavigationTheme(useColorScheme())}>
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
