import { View, Text } from "react-native";
import React from "react";

type ProductListType = {
  name: string;
  price: number;
  image: string;
  isSelected: boolean;
};

export default function ProductList({
  name,
  price,
  image,
  isSelected,
}: ProductListType) {
  console.log(name, price);
  return (
    <View className="flex-row border-b-2 p-4 w-full">
      <Text className="text-lg tracking-wide font-semibold text-emerald-600">
        {name}
      </Text>
    </View>
  );
}
