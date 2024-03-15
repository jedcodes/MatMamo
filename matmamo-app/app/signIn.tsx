import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function SignIn() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <View className="flex-1">
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
