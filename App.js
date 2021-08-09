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
import { useState } from "react";
import { AuthContext } from './src/context';


const App: () => Node = () => {

  const [isLogin, setLogin] = useState(false);

  const authContext = React.useMemo(() => {
    return {
      login: () =>{
        setLogin(true);
      },
      logOut: () => {
        setLogin(false);
      }
    }
  }, []);


  return (
    <AuthContext.Provider value={authContext}>
      <AppNavigator isLogin={isLogin}/>
    </AuthContext.Provider>
  )
};


export default App;
