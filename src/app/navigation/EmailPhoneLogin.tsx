import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmailPhoneLogin = () => {
  const navigation = useNavigation();
  const [contactInfo, setContactInfo] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    validateInput(contactInfo);
  }, [contactInfo]);

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone: string): boolean => {
    // This regex allows various phone number formats with optional country codes
    const re = /^(\+\d{1,3})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return re.test(phone);
  };

  const validateInput = (value: string) => {
    const trimmedValue = value.trim();
    
    if (!trimmedValue) {
      setIsValid(false);
      setErrorMessage('');
      return;
    }
    
    const isValidEmail = validateEmail(trimmedValue);
    const isValidPhone = validatePhone(trimmedValue);
    
    if (isValidEmail || isValidPhone) {
      setIsValid(true);
      setErrorMessage('');
    } else {
      setIsValid(false);
      setErrorMessage('कृपया एक वैध ईमेल पता या फोन नंबर दर्ज करें');
    }
  };

  const handleSubmit = () => {
    if (isValid) {
      // Using any type to bypass TypeScript checking
      const nav = navigation as any;
      nav.navigate('loginPage', { contactInfo });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f8f9fa" barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>नमस्कार</Text>
            <Text style={styles.emojiText}>🙏</Text>
            <Text style={styles.welcomeText}>
              आपका हमारे ऐप में स्वागत है। कृपया जारी रखने के लिए अपना ईमेल या फोन नंबर दर्ज करें।
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                errorMessage ? styles.inputError : null
              ]}
              placeholder="ईमेल या फोन नंबर"
              value={contactInfo}
              onChangeText={setContactInfo}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {errorMessage ? (
              <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              !isValid ? styles.buttonDisabled : null
            ]}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>जारी रखें</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emojiText: {
    fontSize: 48,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#e74c3c',
    marginTop: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#4a90e2',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EmailPhoneLogin;