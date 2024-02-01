/// IMPORT DEPENDENCIES ///

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";

///--///

/// FILES IMPORT ///

import coffeBro from "../../../assets/images/auth/coffeeBro.png";

///--///

const LoginScreen = ({ navigation }) => {
  /// FUNCTION ///

  const HandleLogIn = () => {
    navigation.navigate("MainStack");
  };

  const HandleSignUp = () => {
    navigation.navigate("SignUp");
  };

  ///--///

  return (
    <View>
      <Image style={styles.bgImg} source={coffeBro} />
      <KeyboardAvoidingView style={styles.loginUi}>
        <Text>LoginScreen is here</Text>

        {/* MAIN LOGIN CONTAINER */}
        <View style={styles.inputContainer}>
          <TextInput style={styles.input__box} />
          <TextInput style={styles.input__box} />
          <TextInput />
          <Button onPress={HandleLogIn} title="Login"></Button>
          <Button onPress={HandleSignUp} title="SignUp"></Button>
        </View>

        {/* -- */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bgImg: {
    width: "100%",
    height: "100%",
  },
  loginUi: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  /// MAIN INPUT CONTAINER ///

  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.5)",
  },

  input__box: {
    borderWidth: 1,
    width: "80%",
    marginVertical: 20,
  },

  ///--///
});
