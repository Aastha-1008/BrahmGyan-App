import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import CustomText from '@/components/shared/CustomText'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Register from './RegisterLogin/Register';
import Login from './RegisterLogin/Login';


const LoginPage = () => {
    const [status, setStatus] = useState('register');
    const slideAnim = useRef(new Animated.Value(500)).current; // Initial position off-screen

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0, // Move to the top position
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [status]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.topContainer} edges={['left', 'right']}>
                <ImageBackground
                    source={require('../../assets/images/login-background.png')}
                    resizeMode="cover"
                    style={{ width: '100%', flex: 1 }}
                >

                    <View style={styles.textArea}>
                        <CustomText variant="h1" style={styles.topText}>
                            Go ahead and set up your account
                        </CustomText>
                        <CustomText variant="h6" fontFamily="Bold" style={styles.normalText}>
                            Sign-in up to enjoy best managing experience
                        </CustomText>
                    </View>
                    <Animated.View
                        style={[
                            styles.form,
                            {
                                transform: [{ translateY: slideAnim }], // Apply the slide animation
                            },
                        ]}
                    >
                        <View style={styles.form}>

                            <View style={styles.buttonArea}>
                                <View style={styles.Button}>
                                    <TouchableOpacity><Text style={[styles.ButtonText, status === 'register' && styles.active]} onPress={() => setStatus('register')}>Register</Text></TouchableOpacity>
                                </View>
                                <View style={styles.Button}>
                                    <TouchableOpacity><Text style={[styles.ButtonText, status === 'login' && styles.active]} onPress={() => setStatus('login')}>Login</Text></TouchableOpacity>
                                </View>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.formSection}>
                                {
                                    status === 'register' && <Register />
                                }
                                {
                                    status === 'login' && <Login />
                                }
                                </View>

                            </ScrollView>
                        </View>
                    </Animated.View>

                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

export default LoginPage

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
    },
    textArea: {
        paddingTop: 60,
        padding: 20,
        marginBottom: 20
    },
    topText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 35
    },
    normalText: {
        fontSize: 16,
        marginTop: 20,
        color: '#f7f7f7'
    },
    form: {
        flex: 1,
        backgroundColor: 'white',
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        alignItems: 'center',

    },
    formSection:{
        flex: 1,
        alignItems: 'center'
    },
    buttonArea: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#f1f1f1',
        borderRadius: 50,
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 10
    },
    Button: {
        borderRadius: 25,
        width: '50%'
    },
    ButtonText: {
        padding: 10,
        textAlign: 'center'
    },
    active: {
        backgroundColor: 'white',
        borderRadius: 25,
    }
})