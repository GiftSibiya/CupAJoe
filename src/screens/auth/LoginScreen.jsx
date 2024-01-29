/// IMPORT DEPENDENCIES ///

import { View, Text, Button } from "react-native";
import React from "react";

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
      <Text>LoginScreen is here</Text>
      <Button onPress={HandleLogIn} title="Login"></Button>
      <Button onPress={HandleSignUp} title="SignUp"></Button>
    </View>
  );
};

export default LoginScreen;
