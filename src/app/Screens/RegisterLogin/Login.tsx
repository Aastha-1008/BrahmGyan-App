import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';
import TextBox from '@/components/shared/TextBox';
import CustomButton from '@/components/shared/CustomButton';
import { EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
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
                <CustomButton title="Log In" onPress={() => console.log('login')} />
            </View>

        </View>
    )
}

export default Login;

const styles = StyleSheet.create({

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