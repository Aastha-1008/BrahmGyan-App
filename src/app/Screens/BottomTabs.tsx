import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ForYou from './MainSection/ForYou';
import Explore from './MainSection/Explore';
import Library from './MainSection/Library';
import Profile from './MainSection/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="forYou"
        component={ForYou}
        options={{
          title: 'Satguru Panth',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" size={24} color={focused ? 'blue' : '#000'} />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={Explore}
        options={{
          title: 'Your Collection',
          tabBarLabel: 'Explore',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="compass" size={24} color={focused ? 'blue' : '#000'} />
          ),
        }}
      />
      <Tab.Screen
        name="library"
        component={Library}
        options={{
          title: 'Library',
          tabBarLabel: 'Library',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="bookmark" size={24} color={focused ? 'blue' : '#000'} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-add-sharp" size={24} color={focused ? 'blue' : '#000'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
