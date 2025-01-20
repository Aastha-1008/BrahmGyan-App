import { View, StyleSheet, ImageBackground, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '@/components/shared/CustomText'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import TextBox from '@/components/shared/TextBox';
import CustomButton from '@/components/shared/CustomButton';
import { EvilIcons, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';



const LoginPage = ({ navigation }: any) => {
    const [status, setStatus] = useState('register');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [fullName, setFullName] = useState('');



    const statusUpdate = (currStatus: string) => {
        setStatus(currStatus);
        setFullName('');
        setEmail('');
        setPassword('');
    }

    const onSubmit = () => {
        // Regular expression for email validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Password validation: At least 8 characters, at least one letter and one number
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!email || !password || !fullName){
            alert('Please fill in all fields.');
            return;
        }
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long, and contain at least one letter and one number.');
            return;
        }

        if (status === 'register') {
            console.log('Full Name:', email);
            console.log('Email:', email);
            console.log('Password:', password);
            alert(`Registration successful, welcome ${email}!`);
            navigation.navigate('bottomTabs');

        } else if (status === 'login') {
            console.log('Email:', email);
            console.log('Password:', password);
            alert(`Login successful, welcome back ${email}!`);
            navigation.navigate('bottomTabs');
        }
        setEmail('');
        setFullName('');
        setPassword('');
    };

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
                    <View style={styles.form}>
                        <View style={styles.buttonArea}>
                            <View style={styles.Button}>
                                <TouchableOpacity><Text style={[styles.ButtonText, status === 'register' && styles.active]} onPress={() => statusUpdate('register')}>Register</Text></TouchableOpacity>
                            </View>
                            <View style={styles.Button}>
                                <TouchableOpacity><Text style={[styles.ButtonText, status === 'login' && styles.active]} onPress={() => statusUpdate('login')}>Login</Text></TouchableOpacity>
                            </View>
                        </View>
                        {
                            status === 'register' &&
                            <View style={styles.formSection}>
                                <TextBox IconTitle={Ionicons} title="Full Name" IconName='person-add-outline' placeholder='Please Enter Your Full Name ' size={30} value={fullName} onChangeText={setFullName} />
                                <TextBox IconTitle={EvilIcons} title="Email Id" IconName='envelope' placeholder='Please Enter Your Email Id' size={40} value={email} onChangeText={setEmail} />
                                <TextBox IconTitle={Feather} title="Password" IconName='lock' placeholder='Please Enter Your Password' size={30} value={password} onChangeText={setPassword} />

                                <View>
                                    <CustomButton title="Register" onPress={onSubmit} />
                                </View>

                            </View>
                        }
                        {
                            status === 'login' &&
                            <View style={styles.formSection}>
                                <TextBox IconTitle={EvilIcons} title="Email Id" IconName='envelope' placeholder='Please Enter Your Email Id ' size={40} value={email} onChangeText={setEmail} />
                                <TextBox IconTitle={EvilIcons} title="Password" IconName='lock' placeholder='Please Enter Your Password ' size={40} value={password} onChangeText={setPassword} />
                                <View style={styles.extraDetail}>
                                    <View style={styles.checkContainer}>
                                        <TouchableOpacity
                                            style={styles.checkbox}
                                            onPress={() => setSelection(!isSelected)}
                                        >
                                            <Icon
                                                name={isSelected ? 'check-square' : 'square-o'}
                                                type="font-awesome"
                                                color={isSelected ? '#0B1B87' : '#000'}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.label}>Remember Me</Text>
                                    </View>

                                    <Text style={{ color: '#0B1B87' }}>Forget Password ?</Text>
                                </View>
                                <View>
                                    <CustomButton title="Log In" onPress={onSubmit} />
                                </View>

                            </View>
                        }
                    </View>
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
        paddingTop: 40,
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
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        alignItems: 'center',

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
    },
    formSection: {
        width: '90%',
        marginTop: 50
    },
    extraDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        alignItems: 'center'
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        color: '#000',
    }
})