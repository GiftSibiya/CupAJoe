/// IMPORT DEPENDENCIES ///

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

///--///

/// FILES IMPORT ///

import coffeBro from "../../../assets/images/auth/coffeeBro.png";
import googleIcon from "../../../assets/images/auth/google.png";
import facebookIcon from "../../../assets/images/auth/facebook.png";

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
        {/* MAIN LOGIN CONTAINER */}
        <View style={styles.inputContainer}>
          <Text style={styles.heading}>Welcome Back, Login Here</Text>
          <TextInput style={styles.input__box} placeholder="Email" />
          <TextInput style={styles.input__box} placeholder="Password" />
          <TextInput />
          <TouchableOpacity style={styles.loginBtn} onPress={HandleLogIn}>
            <Text style={styles.loginBtn__Text}>Login</Text>
          </TouchableOpacity>

          {/* ICONS GROUP */}

          <View style={styles.socialLogin}>
            <Text> Or Continue With... </Text>
            <View style={styles.icons}>
              <Image source={googleIcon} />
              <Image source={facebookIcon} />
            </View>
          </View>

          {/* -- */}

          <Text style={styles.signUp}>
            Don't have an account?{" "}
            <TouchableOpacity onPress={HandleSignUp}>
              <Text style={styles.signUpText}> Sign Up</Text>
            </TouchableOpacity>
          </Text>
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
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  input__box: {
    width: "80%",
    height: 50,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "silver",
    borderWidth: 1,
    padding: 10,
  },

  ///--///

  /// BUTTON ///

  loginBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "80%",
    borderRadius: 10,
    backgroundColor: "#994D1C",
  },

  loginBtn__Text: {
    color: "white",
  },

  signUp: {
    marginTop: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  signUpText: {
    color: "brown",
    marginTop: 10,
  },

  socialLogin: {
    display: "flex",
    flexDirection: "column",
  },

  icons: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ///--///
});
