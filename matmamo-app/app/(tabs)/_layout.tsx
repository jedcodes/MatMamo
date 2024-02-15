import { Tabs } from "expo-router/tabs";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#2d554a",
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
            <Ionicons name="home-outline" size={19} color={"#ffffff"} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarLabel: "Scan",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="line-scan" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="shoppingList"
        options={{
          tabBarLabel: "Handle Liste",
          tabBarIcon: () => (
            <Ionicons name="list-outline" size={24} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
