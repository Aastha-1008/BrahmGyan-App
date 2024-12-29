import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ForYou from './screen/ForYou';
import Library from './screen/Library';
import Profile from './screen/Profile';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Search from './screen/Search';



const Tab = createBottomTabNavigator();

const Layout = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='forYou' component={ForYou}
        options ={{
          title: 'Brahm Gyan Yog',
          tabBarLabel: 'For You',
          tabBarIcon: ({ focused })=> <AntDesign name="eye" size={24} color= {focused ?"blue" : "#000"}/>,
        }}
      />
      <Tab.Screen name='library' component={Library}
        options ={{
          title: 'Your Collection',
          tabBarLabel: 'Library',
          tabBarIcon: ({ focused })=> <MaterialCommunityIcons name="bookshelf" size={24} color={focused ?"blue" : "#000"} />
        }}

      />
      <Tab.Screen name='search' component={Search}
        options ={{
          title: 'Search',
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused })=> <MaterialCommunityIcons name="comment-search" size={24} color={focused ?"blue" : "#000"} />
        }}
      
      />
      <Tab.Screen name='profile' component={Profile}
        options ={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused })=> <Ionicons name="person-add-sharp" size={24} color={focused ?"blue" : "#000"} />
        }}
      
      />
    </Tab.Navigator>
  )
}

export default Layout