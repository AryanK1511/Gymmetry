import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { 
    StyleSheet,
    Text,
    View, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    Button 
} from "react-native";

// ========== LOG IN FORM COMPONENT ==========
const LoginForm = () => {
  // Creating state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
        <StatusBar style="auto" />
        <View>
            <TextInput placeholder="Email" />
        </View>
    </View>
  );
};

export default LoginForm;
