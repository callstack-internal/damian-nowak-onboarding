/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {AppNavigator} from './navigation';
import {ApiQueryProvider} from './providers/ApiQueryProvider.tsx';

function App(): React.JSX.Element {
  return (
    <ApiQueryProvider>
      <AppNavigator />
    </ApiQueryProvider>
  );
}

export default App;
