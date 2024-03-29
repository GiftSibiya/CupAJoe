/// DEPENDENCY IMPORTS ///
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

///--///

/// VARIABLES ///
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
///--///

/// FILES IMPORT ///

//AUTH SCREENS
import LoginScreen from "./src/screens/auth/LoginScreen";
import SignUpScreen from "./src/screens/auth/SignUpScreen";

/// MAIN SCREENS ///

//MAIN SCREENS
import HomeScreen from "./src/screens/main/HomeScreen";
import ProductScreen from "./src/screens/main/ProductScreen";

//CART SCREEN
import Cart from "./src/screens/main/Cart";

//ACCOUNT SCREEN
import Account from "./src/screens/main/Account";

///--///

/// AUTH STACK ///
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

//--//

/// MAIN STACK ///
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
/// -- ///

// MAIN STACK //
const MainStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: 10,
          marginBottom: 10,
          borderRadius: 20,
          height: 60,
          backgroundColor: "#994D1C",
        },
      })}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                style={styles.icons}
                name="home"
                size={40}
                color="white"
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                style={styles.icons}
                name="cart"
                size={40}
                color="white"
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Account}
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                style={styles.icons}
                name="account"
                size={40}
                color="white"
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
//--//

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
