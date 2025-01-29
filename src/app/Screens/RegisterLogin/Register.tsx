import { View, StyleSheet } from 'react-native';
import TextBox from '@/components/shared/TextBox';
import CustomButton from '@/components/shared/CustomButton';
import { EvilIcons, Ionicons, Feather } from '@expo/vector-icons';
import { registerLoginAction } from '@/components/API/loginlogout';
import React, { useState } from 'react'

const Register = ({navigation }:any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('2002-08-10');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');




    const onSubmit = async () => {
        registerLoginAction({ email, password, firstName, lastName, dob, phoneNumber, confirmPassword,status:"register",  navigation });

        // setEmail('');
        // setFirstName('');
        // setLastName('');
        // setPassword('');
        // setPhoneNumber('');
        // setConfirmPassword('');

    };

    return (
        <View style={styles.formSection}>
            <TextBox IconTitle={Ionicons} title="First Name" IconName='person-add-outline' placeholder='Please Enter Your First Name ' size={30} value={firstName} onChangeText={setFirstName} />
            <TextBox IconTitle={Ionicons} title="Last Name" IconName='person-add-outline' placeholder='Please Enter Your Last Name ' size={30} value={lastName} onChangeText={setLastName} />
            <TextBox IconTitle={Ionicons} title="Phone Number" IconName='person-add-outline' placeholder='Please Enter Your Phone Number ' size={30} value={phoneNumber} onChangeText={setPhoneNumber} />
            <TextBox IconTitle={EvilIcons} title="Email Id" IconName='envelope' placeholder='Please Enter Your Email Id' size={40} value={email} onChangeText={setEmail} />
            <TextBox IconTitle={Ionicons} title="Dob" IconName='person-add-outline' placeholder='Please Enter Your Date of Birth ' size={30} value={dob} onChangeText={setDob} />
            <TextBox IconTitle={Feather} title="Password" IconName='lock' placeholder='Please Enter Your Password' size={30} value={password} onChangeText={setPassword} />
            <TextBox IconTitle={Feather} title="Confirm Password" IconName='lock' placeholder='Please Enter Password Again' size={30} value={confirmPassword} onChangeText={setConfirmPassword} />

            <View>
                <CustomButton title="Register" onPress={onSubmit} />
            </View>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({

    formSection: {
        width: '90%',
        marginTop: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})