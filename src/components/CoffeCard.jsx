/// DEPENDENCY IMPORTS ///

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

///---///

const CoffeCard = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={item.image}></Image>
      </View>
      <View>
        <Text style={styles.coffeName}>{item.name}</Text>
        <View style={styles.starCon}>
          <MaterialCommunityIcons
            style={styles.icons}
            name="star"
            size={25}
            color="white"
          />
          <Text style={styles.starText}>{item.stars}</Text>
        </View>
        <View style={styles.volumeCon}>
          <Text style={styles.volumeText}>Volume:</Text>
          <Text style={styles.volumeVar}>{item.volume}</Text>
        </View>
        <View style={styles.priceCon}>
          <Text style={styles.priceText}>R{item.price}</Text>
          <MaterialCommunityIcons
            style={styles.addIcons}
            name="plus"
            size={25}
            color="white"
          />
        </View>
      </View>
    </View>
  );
};

export default CoffeCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    backgroundColor: "#994D1C",
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
  starCon: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    width: 80,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  starText: {
    color: "white",
    fontSize: 18,
  },
  volumeCon: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  volumeText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 10,
  },
  volumeVar: {
    color: "white",
  },
  priceCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  priceText: {
    color: "white",
    fontSize: 20,
  },
  addIcons: {
    backgroundColor: "white",
    padding: 10,
    color: "brown",
    borderRadius: 50,
  },
});
