import { View, Text } from "react-native";
import React from "react";
import { FAB } from "@rneui/themed";

export default function index() {
  return (
    <View className="flex-1 ">
      <FAB size="large" placement="right" />
    </View>
  );
}
