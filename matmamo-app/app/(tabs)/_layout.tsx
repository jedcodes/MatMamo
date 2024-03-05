import { Tabs } from "expo-router/tabs";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f9f9f9",
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Hjem",
          tabBarLabel: "Hjem",
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color={"#828282"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Søk",
          tabBarIcon: () => (
            <Ionicons name="search-outline" size={24} color="#828282" />
          ),
        }}
      />

      <Tabs.Screen
        name="shoppingList"
        options={{
          title: "Handleliste",
          tabBarIcon: () => (
            <Ionicons name="list-outline" size={24} color="#828282" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritter",
          tabBarIcon: () => (
            <MaterialIcons name="favorite-outline" size={24} color="#828282" />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Profil",
          tabBarIcon: () => (
            <FontAwesome5 name="user" size={24} color="#828282" />
          ),
        }}
      />
    </Tabs>
  );
}
