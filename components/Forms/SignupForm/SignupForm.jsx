import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Icon, Button } from '@rneui/themed';
import styles from '../common-styles';
import { Link } from 'expo-router';

// ========== SIGN UP FORM COMPONENT ==========
const SignupForm = () => {
  // State Variables
  const [ fullName, setFullName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordError, setPasswordError ] = useState("");
  const [ emailError, setEmailError ] = useState("");

  // Password validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Event Handler
  const handleFormSubmit = () => {
    // Reset state
    setFullName("");
    setEmail("");
    setPassword("");
    setPasswordError("");
    setEmailError("");

    // Email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (!password || !passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.");
      return;
    }

    // Form submission logic
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.lof(emailError)
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Full Name"
        leftIcon={<Icon type="font-awesome" name="user" />}
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Input
        placeholder="Email"
        leftIcon={<Icon type="font-awesome" name="envelope" />}
        value={email}
        onChangeText={(text) => setEmail(text)}
        errorMessage={emailError}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon type="font-awesome" name="lock" />}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        errorMessage={passwordError}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <Text style={styles.paragraph}>Already have an account? <Link style={styles.link} href="/login">Log In</Link></Text>
      <Button style={styles.button} buttonStyle={styles.button} title="Sign Up" onPress={handleFormSubmit} />
    </View>
  );
};

export default SignupForm;
