import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { IProduct, ProductResult } from "@/interfaces/IProduct";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CheckBox from "expo-checkbox";
import useShoppingListStore from "@/services/stores/shoppingListStore";

type ProductListType = {
  products: IProduct;
};

export default function ProductList({ products }: ProductListType) {
  const addToShoppingList = useShoppingListStore(
    (state) => state.addToShoppingList
  );
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Pressable
      onPress={() => addToShoppingList(products)}
      className="flex-row p-3 items-center justify-between mb-2"
    >
      <View className="flex-row items-center">
        <Image
          style={{ height: hp(8), width: wp(6) }}
          source={{ uri: products.image }}
        />
        <View style={{ marginLeft: wp(6) }}>
          <Text
            style={{ fontSize: hp(1.6) }}
            className="tracking-wide font-semibold"
          >
            {products.name}
          </Text>
          <Text
            style={{ fontSize: hp(1.3) }}
          >{`${products.weight} ${products.weight_unit}`}</Text>
        </View>
      </View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() => setToggleCheckBox(!products.isSelected)}
      />
    </Pressable>
  );
}
