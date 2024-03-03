import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ShoppingListCard() {
  return (
    <Pressable
      style={{ height: hp(20) }}
      className="w-full bg-emerald-500 rounded-xl p-4"
    >
      <Text className="font-semibold text-2xl text-white ">House Party</Text>
      <Text>4 Items</Text>
      <View></View>
    </Pressable>
  );
}
