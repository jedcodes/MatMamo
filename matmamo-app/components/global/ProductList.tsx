import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { IProduct, ProductResult } from "@/interfaces/IProduct";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CheckBox from "expo-checkbox";

type ProductListType = {
  products: IProduct;
};

export default function ProductList({ products }: ProductListType) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Pressable className="flex-row p-3 items-center justify-between">
      <Image
        style={{ height: hp(8), width: wp(6) }}
        source={{ uri: products.image }}
      />
      <Text
        style={{ fontSize: hp(1.8) }}
        className="tracking-wide font-semibold text-emerald-600"
      >
        {products.name}
      </Text>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() => setToggleCheckBox(!products.isSelected)}
      />
    </Pressable>
  );
}
