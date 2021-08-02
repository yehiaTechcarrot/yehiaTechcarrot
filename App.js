/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import type {Node} from 'react';
import AppNavigator from "./src/navigation/navigator";


const App: () => Node = () => {
  return <AppNavigator />;
};

export default App;
