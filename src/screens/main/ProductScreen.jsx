import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ProductScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.name}</Text>
      <Image source={item.image} style={styles.productImage} />
      {/* Display other information about the product */}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  productImage: {
    height: 200, // Adjust the height as needed
    width: "100%", // Take full width
  },
});
