import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { IProduct } from "@/interfaces/IProduct";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CheckBox from "expo-checkbox";
import useProductStore from "@/services/stores/productListStore";

type ProductListType = {
  products: IProduct & { isSelected: boolean };
};

export default function ProductList({ products }: ProductListType) {
  const { addProduct, toggleProduct, removeProduct, productList } =
    useProductStore();
  const [selected, setSelected] = useState(false);

  const handleItemClicked = () => {
    addProduct(products);
    setSelected(!selected);
  };

  return (
    <Pressable
      style={{
        backgroundColor: selected ? "#86efac" : "white",
        borderRadius: 10,
      }}
      onPress={handleItemClicked}
      className="flex-row p-3 items-center justify-between mb-2 rounded-lg"
    >
      <View className="flex-row items-center">
        <Image
          style={{ height: hp(8), width: wp(6) }}
          source={{ uri: products.image }}
        />
        <View style={{ marginLeft: wp(6) }}>
          <Text
            style={{
              fontSize: hp(1.6),
              color: selected ? "#fff" : "black",
            }}
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
        value={selected}
        onValueChange={() => setSelected(!selected)}
        color={selected ? "#00b96d" : "black"}
      />
    </Pressable>
  );
}
