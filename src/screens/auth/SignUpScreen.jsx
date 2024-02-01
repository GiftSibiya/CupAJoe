/// IMPORT DEPENDENCIES ///

import React from "react";
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

///--///

/// FILES IMPORT ///
import coffeBro from "../../../assets/images/auth/coffeeBro.png";

///--///

const SignUpScreen = () => {
  return (
    <View>
      <Image style={styles.bgImg} source={coffeBro} />
      <KeyboardAvoidingView style={styles.loginUi}>
        {/* MAIN LOGIN CONTAINER */}
        <View style={styles.inputContainer}>
          <Text style={styles.heading}>
            Sign up to unlock a world of coffee mastery
          </Text>
          <TextInput style={styles.input__box} placeholder="Name" />
          <TextInput style={styles.input__box} placeholder="Email" />
          <TextInput style={styles.input__box} placeholder="Password" />
          <TextInput />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtn__Text}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.signUp}>
            Have an account?{" "}
            <TouchableOpacity>
              <Text style={styles.signUpText}> Log In</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={styles.socialLogin}></View>

        {/* -- */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;

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
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  input__box: {
    width: "80%",
    height: 50,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    padding: 10,

    color: "white",
  },

  ///--///

  /// BUTTON ///

  loginBtn: {
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "80%",
    borderRadius: 10,
    borderColor: "brown",
    backgroundColor: "rgba(255,255,255,0.3)",
  },

  loginBtn__Text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },

  /// SIGNUP SECTION ///

  signUp: {
    textAlign: "center",
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  signUpText: {
    textAlign: "center",
    marginTop: 10,
  },

  ///--///

  /// LOGIN ICONS ///
  socialLogin: {
    borderWidth: 2,
  },
});
