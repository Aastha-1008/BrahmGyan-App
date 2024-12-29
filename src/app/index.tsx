import { View, Text, StatusBar } from 'react-native'
import React , {useState} from 'react'
import {useFonts} from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const Index = () => {

    const [loaded] = useFonts({
        Bold: require('../assets/fonts/Rubik-Bold.ttf'),
        Regular: require('../assets/fonts/Rubik-Regular.ttf'),
        Medium: require('../assets/fonts/Rubik-Medium.ttf'),
        Light: require('../assets/fonts/Rubik-Light.ttf'),
        SemiBold: require('../assets/fonts/Rubik-SemiBold.ttf'),
        ExtraBold: require('../assets/fonts/Rubik-ExtraBold.ttf')
    });


  return (
    <SafeAreaView>
     <Text>Index file</Text>
    </SafeAreaView>
  )
}

export default Index