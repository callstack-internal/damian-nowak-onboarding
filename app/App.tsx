/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import {AppNavigator} from './navigation';
import {ApiQueryProvider} from './providers/ApiQueryProvider.tsx';
import {getPaperTheme} from './theme/theme.utils.ts';

function App(): React.JSX.Element {
  return (
    <ApiQueryProvider>
      <PaperProvider theme={getPaperTheme(useColorScheme())}>
        <AppNavigator />
      </PaperProvider>
    </ApiQueryProvider>
  );
}

export default App;
