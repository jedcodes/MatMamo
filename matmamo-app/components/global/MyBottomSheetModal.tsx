import { View, Text, Pressable } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import TextInputBar from "./TextInputBar";
import ProductList from "./ProductList";
import { fetchAllProducts } from "@/services/api/apiService";

type BottomSheetType = {
  sheetRef: React.Ref<BottomSheetModal> | undefined;
};

export default function MyBottomSheetModal({ sheetRef }: BottomSheetType) {
  //Local state
  const [fetchedProducts, setFetchedProducts] = useState<IProduct[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  const snapPoints = useMemo(() => ["50%", "95%"], []);
  const searchRef: React.MutableRefObject<string> = useRef("");

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const fetchProducts = async () => {
    const products = await fetchAllProducts(searchRef.current);
  };

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ backgroundColor: "#fff" }}
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
    >
      <BottomSheetView>
        <View className="flex-row items-center justify-between p-2">
          <Pressable>
            <Ionicons name="filter-outline" size={24} color="black" />
          </Pressable>
          <Text className="text-lg font-semibold">Legg til handleliste</Text>
          <Pressable>
            <Ionicons name="close-outline" size={24} color="black" />
          </Pressable>
        </View>
        <View className="flex-row justify-between items-center px-2 mt-4">
          <TextInputBar searchRef={searchRef} />
          <Pressable>
            <Ionicons name="barcode-outline" size={24} color="#00b96d" />
          </Pressable>
        </View>
        <View className="mt-4 px-2">
          <ProductList />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
