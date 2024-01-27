/// DEPENDENCY IMPORTS ///

import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Carousel from "react-native-snap-carousel";

///--///

/// FILE IMPORTS ///
import beansBg from "../../../assets/images/beansBG.png";
import { categories, coffeeItems } from "../../../assets/data/appData";
import CoffeCard from "../../components/CoffeCard";
///--///

const HomeScreen = () => {
  /// HOOKS ///

  const [activeCategory, setActiveCategory] = useState(1);

  /// -- ///

  /// RETURN ///
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={beansBg} style={styles.bgBeans} />

      {/* HEADER ICONS  */}
      <SafeAreaView>
        <View style={styles.headerIcons}>
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
        </View>
        {/* SEARCH BAR */}
        <View style={styles.searchStuff}>
          <TextInput style={styles.searchBar} placeholder="Search">
            <MaterialCommunityIcons
              style={styles.icons}
              name="magnify"
              size={30}
              color="brown"
            />
          </TextInput>
        </View>

        {/* HOWIZONTAL SCROLL  */}
        <View style={styles.categoryScroll}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={setActiveCategory(item.id)}>
                  <Text style={styles.categoryText}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* -- */}

        <View style={styles.carousel}>
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={260}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
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
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginHorizontal: 10,
  },
  icons: {
    height: 50,
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
  searchStuff: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  searchBar: {
    padding: 10,
    height: 50,
    borderRadius: 20,
    width: "90%",
    backgroundColor: "silver",
  },
  categoryScroll: {
    padding: 5,
    overflow: "visible",
    marginTop: 10,
    height: 70,
  },
  categoryText: {
    backgroundColor: "silver",
    padding: 15,
    borderRadius: 20,
    margin: 5,
    fontSize: 14,
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    marginTop: "10",
    paddingVertical: 2,
    borderWidth: 2,
    height: 200,
  },
});
