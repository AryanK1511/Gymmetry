import React from 'react';
import { View, Text } from 'react-native';
import SignupForm from '../../components/Forms/SignupForm/SignupForm';
import styles from './styles';

// ========== SIGN UP PAGE==========
const SignUp = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up</Text>
          <View style={styles.formContainer}>
            <SignupForm />
          </View>
        </View>
      );
    
}

export default SignUp;