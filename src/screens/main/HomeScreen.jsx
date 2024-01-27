/// DEPENDENCY IMPORTS ///

import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "react-native-vector-icons";

///--///

/// FILE IMPORTS ///
import beansBg from "../../../assets/images/beansBG.png";
///--///

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={beansBg} style={styles.bgBeans} />

      {/* HEADER ICONS  */}
      <SafeAreaView style={styles.headerIcons}>
        {/* ACCOUNT ICON */}

        <MaterialCommunityIcons
          style={styles.icons}
          name="account"
          size={40}
          color="brown"
        />

        {/* LOCATON ICONS */}
        <View style={styles.location}>
          <MaterialCommunityIcons
            style={styles.icons}
            name="map-marker"
            size={40}
            color="brown"
          />
          <Text style={styles.locationText}> Pretoria, CBD</Text>

          {/* NOTIFICATION ICON */}
        </View>
        <View style={styles.notifi}>
          <MaterialCommunityIcons
            style={styles.icons}
            name="bell-outline"
            size={40}
            color="brown"
          />
        </View>
      </SafeAreaView>
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
    opacity: 0.3,
    height: "20%",
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginHorizontal: 10,
    flex: 1,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  locationText: {
    fontSize: 16,
  },
});
