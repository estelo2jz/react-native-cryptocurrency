import React, { useEffect } from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

// app.use(bodyParser.json({
//   limit: '50mb'
// }));

// app.use(bodyParser.urlencoded({
//   limit: '50mb',
//   parameterLimit: 100000,
//   extended: true
// }));

const App = () => {

  // React.useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
        />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;