/// DEPENDENCY IMPORTS ///

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

///--///

/// FILE IMPORTS ///
import beansBg from "../../../assets/images/beansBG.png";
///--///

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={beansBg} style={styles.bgBeans} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  bgBeans: {
    width: "100%",
    position: "absolute",
    top: 5,
    opacity: 10,
    height: "20%",
  },
});
