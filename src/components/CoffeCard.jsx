import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CoffeCard = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={item.image}></Image>
      </View>
      <View>
        <Text style={styles.coffeName}>{item.name}</Text>
      </View>
    </View>
  );
};

export default CoffeCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    backgroundColor: "brown",
    borderRadius: 30,
    height: 300,
    width: 200,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 80,
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.8,
    marginTop: -20,
  },
  cardImage: {
    height: 130,
    width: 130,
  },
  coffeName: {
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 25,
  },
});
