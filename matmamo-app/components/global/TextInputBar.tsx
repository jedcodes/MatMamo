import { View, TextInput, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TextInputBar(props: any) {
  return (
    <View
      style={{ height: hp(5) }}
      className="flex-row px-4 bg-neutral-200 items-center justify-center rounded-full flex-1 mr-2"
    >
      <EvilIcons name="search" size={hp(3)} color="gray" />
      <TextInput
        onSubmitEditing={props.handleInputSubmit}
        onChangeText={(value) => (props.searchRef.current = value)}
        style={{ fontSize: hp(1.5) }}
        className="flex-1 font-semibold text-neutral-700"
        placeholder="Search for a product or a recipe..."
        placeholderTextColor={"gray"}
      />

      <Pressable>
        <MaterialCommunityIcons name="barcode-scan" size={24} color="#00b96d" />
      </Pressable>
    </View>
  );
}
