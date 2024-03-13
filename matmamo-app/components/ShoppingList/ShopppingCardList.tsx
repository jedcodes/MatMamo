import { View, Image, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function ShopppingCardList() {
  return (
    <View className="flex-row justify-between items-center px-2 mt-4">
      <View className="flex-row items-center">
        <Image source={{ uri: "https://placehold.co/100x100" }} />
        <View className="items-center">
          <Text
            style={{ fontSize: hp(1.6) }}
            className="font-semibold tracking-wider"
          >
            Name
          </Text>
          <Text className="">Private</Text>
        </View>
      </View>
      <Pressable>
        <Ionicons name="add-circle-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
}
