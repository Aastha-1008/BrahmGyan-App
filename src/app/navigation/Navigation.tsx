import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginPage from '../Screens/LoginPage';
import BottomTabs from '../Screens/BottomTabs';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splashScreen" component={SplashScreen} />
      <Stack.Screen name="loginPage" component={LoginPage} />
      <Stack.Screen name="bottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default Navigation;
