import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MyCartScreen from "../screens/MyCartScreen/MyCartScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import DealScreen from "../screens/DealScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MyCart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyCartScreen"
        component={MyCartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DealScreen"
        component={DealScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="home"
                color={focused ? "#FF5722" : "grey"}
                size={size}
              />
            ),
          }}
        />
        <Stack.Screen
          name="My Cart"
          component={MyCart}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="shopping-cart"
                color={focused ? "#FF5722" : "grey"}
                size={size}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="user"
                color={focused ? "#FF5722" : "grey"}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
