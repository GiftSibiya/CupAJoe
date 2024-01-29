/// DEPENDENCIY IMPORTS ///

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

///--///

/// FILE IMPORTS ///

import coffeeTable from "../../../assets/images/ProductPage/coffeTable.png";
import { useNavigation } from "@react-navigation/native";

/// -- ///

const ProductScreen = ({ route }) => {
  const { item } = route.params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.productContainer}>
      <Image style={styles.coffeeTable} source={coffeeTable}></Image>

      {/* ABSOLUTE POSITION CONTAINER */}
      <View style={styles.headerThings}>
        <View style={styles.productHeader}>
          {/* HEADER ICONS */}

          <View style={styles.productHeader__Icons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                style={styles.addIcons}
                name="arrow-left"
                size={40}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                style={styles.addIcons}
                name="heart"
                size={40}
                color="white"
              />
            </TouchableOpacity>
          </View>
          {/* -- */}
        </View>
        <View style={styles.imageCon}>
          <Image source={item.image} style={styles.productImage} />
        </View>
        {/* -- */}
      </View>

      {/* BOTTOM CONTAINER */}

      <View style={styles.bottomCon}>
        {/* STAR COUNTER */}

        <View style={styles.ProductStars}>
          <MaterialCommunityIcons
            style={styles.addIcons}
            name="star"
            size={30}
            color="white"
          />
          <Text> {item.stars} </Text>
        </View>

        {/* -- */}

        {/* COFFEE NAME AND PRICE */}
        <View style={styles.namePrice}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>R{item.price} </Text>
        </View>
        {/* -- */}

        {/* COFFEE SIZES */}
        <View style={styles.sizes}>
          <View style={styles.itemsize}>
            <Text style={styles.itemsize__text}>Small</Text>
          </View>
          <View style={styles.itemsize}>
            <Text style={styles.itemsize__text}>Medium</Text>
          </View>
          <View style={styles.itemsize}>
            <Text style={styles.itemsize__text}>Large</Text>
          </View>
        </View>
        {/* -- */}

        {/* ABOUT SECTION */}
        <View style={styles.itemAbout}>
          <Text style={styles.itemAbout__heading}>About</Text>
          <Text style={styles.itemAbout__desc}>{item.desc} </Text>
        </View>
        {/* -- */}

        {/* QUANTITY AND BUY BUTTON */}
        <View style={styles.itemBuy}>
          <View style={styles.itemBuy__vol}>
            <View style={styles.itemVolInfo}>
              <Text style={styles.itemVolInfo__Text}>Volume: </Text>
              <Text style={styles.itemVolInfo__Vol}>{item.volume}</Text>
            </View>
            <View style={styles.itemBuy__QTY}>
              <MaterialCommunityIcons
                style={styles.addIcons}
                name="plus"
                size={30}
                color="white"
              />
              <Text> 0 </Text>
              <MaterialCommunityIcons
                style={styles.addIcons}
                name="minus"
                size={30}
                color="white"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.BuyBtn}>
            <Text style={styles.BuyBtn__Text}> Buy Now</Text>
          </TouchableOpacity>
        </View>

        {/* -- */}
      </View>

      {/* -- */}
    </SafeAreaView>
  );
};

export default ProductScreen;

/// STYLE SHEETS ///
const styles = StyleSheet.create({
  productContainer: {
    display: "flex",
    flexDirection: "column",
  },

  /// HEADER ///

  headerThings: {
    display: "flex",
    width: "100%",
    position: "absolute",
    elevation: 5,
  },
  coffeeTable: {
    width: "100%",
  },
  productHeader: {
    height: "50%",
    width: "100%",
  },
  productHeader__Icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 80,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  imageCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  productImage: {
    height: 200,
    width: 200,
  },

  ///--///

  bottomCon: {
    marginTop: 80,
    display: "flex",
    flexDirecton: "column",
    width: "100%",
    borderwidth: 10,
  },
  ProductStars: {
    display: "flex",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#E48F45",
    width: 100,
    borderRadius: 20,
    padding: 2,
  },

  /// NAME AND PRICE ///

  namePrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
    height: 40,
  },
  itemName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 17,
    fontWeight: "bold",
  },

  ///--///

  /// COFFEE SIZES ///
  sizes: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 30,
  },
  itemsize: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E48F45",
    width: 100,
    height: 35,
    borderRadius: 20,
  },
  itemsize__text: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },

  ///--///

  /// ABOUT SECTION ///

  itemAbout: {},
  itemAbout__heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  itemAbout__desc: {},

  ///--///

  /// QUANTITY AND BUY BUTTON   ///

  itemBuy: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    backgroundColor: "#A94438",
  },
  itemVolInfo: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
  },
  itemVolInfo__Text: {
    color: "rgba(255, 255, 255, 0.5)",
  },

  itemBuy__QTY: {
    display: "felx",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    paddingHorizontal: 5,
  },
  itemBuy__vol: {
    display: "flex",
    flexDirection: "column",
  },
  itemVolInfo__Vol: {
    color: "white",
    fontWeight: "bold",
  },

  BuyBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C38154",
    width: 150,
    height: 50,
    borderRadius: 100,
  },
  BuyBtn__Text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  ///==///
});

/// -- ///
