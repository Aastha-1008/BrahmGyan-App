// web client id - 884200368258-fi60aasanjnh45t64ccjtk113cm36fd9.apps.googleusercontent.com
// android client id - 884200368258-4dn4pfc2d862jpqrv3q6gk46473ncun6.apps.googleusercontent.com

import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  SafeAreaView,
  Button,
  Text
} from 'react-native';
import { GoogleSignin} from '@react-native-google-signin/google-signin';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

WebBrowser.maybeCompleteAuthSession();



const LoginPage = ({ navigation }: any) => {
  const [userInfo, setUserInfo] = useState(null);
  const [request , response , promptAsync] = Google.useAuthRequest({
    androidClientId: "723599844416-uhtgi4e8ci7oemvna2ttedl1nbkep6ds.apps.googleusercontent.com",
    iosClientId:"723599844416-9duse43aiagv8vble36p4uku0a4qqjcp.apps.googleusercontent.com",
    webClientId: "723599844416-omtu5e6kdqjnspva1b9mn76qf387utk9.apps.googleusercontent.com"
  });


  useEffect(()=> {
    handleSignInWithGoogle();
  },[response]);
  
  async function handleSignInWithGoogle(){
    const user = await AsyncStorage.getItem("@user");
    if(!user){
      if (response?.type === "success" && response.authentication?.accessToken) {
        await getUserInfo(response.authentication?.accessToken);
      }
    }else{
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async(token: String | null ) => {
    if(!token) return;

    try{
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers:{Authorization: `Bearer ${token}`},
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user",JSON.stringify(user));
      setUserInfo(user);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{JSON.stringify(userInfo,null,2)}</Text>
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
        <Button title = "delete local storage" onPress={() => AsyncStorage.removeItem("@user")}/>
      </SafeAreaView>
    </>
  );
};


export default LoginPage;