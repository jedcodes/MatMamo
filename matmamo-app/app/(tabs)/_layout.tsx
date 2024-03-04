import { Tabs } from "expo-router/tabs";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#f9f9f9",
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Hjem",
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color={"#828282"} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="favorite-outline" size={24} color="#828282" />
          ),
        }}
      />
      <Tabs.Screen
        name="shoppingList"
        options={{
          tabBarIcon: () => <Ionicons name="add" size={30} color="#828282" />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={24} color="#828282" />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="user" size={24} color="#828282" />
          ),
        }}
      />
    </Tabs>
  );
}
