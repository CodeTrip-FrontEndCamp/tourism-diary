import React, { JSX } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Welcome from './src/modules/welcome/Welcome';
import Login from './src/modules/login/Login';
import HomeTab from './src/modules/mainTab/MainTab';

const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
    <SafeAreaProvider style={{ width: '100%', height: '100%' }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            cardStyle: { elevation: 1, },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromLeftIOS,
            }}
          />
          <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromLeftIOS,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
