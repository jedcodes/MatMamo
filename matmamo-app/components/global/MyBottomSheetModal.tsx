import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import TextInputBar from "./TextInputBar";
import ProductList from "./ProductList";
import { FlashList } from "@shopify/flash-list";
import {
  fetchSearchedProducts,
  fetchProducts,
} from "@/services/api/apiService";
import { useQuery } from "@tanstack/react-query";

type BottomSheetType = {
  sheetRef: React.Ref<BottomSheetModal> | undefined;
};

export default function MyBottomSheetModal({ sheetRef }: BottomSheetType) {
  //Local state
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  const snapPoints = useMemo(() => ["50%", "95%"], []);
  const searchRef: React.MutableRefObject<string> = useRef("");

  let content;

  const fetchAllProducts = async () => {
    try {
      const results: IProduct[] = await fetchProducts();
      console.log(results);
      return results;
    } catch (error) {
      console.error("Failed to fetch products:", error);

      return [];
    }
  };

  const handleInputSubmit = async () => {
    const data = await fetchSearchedProducts(searchRef.current);
  };

  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });

  if (isPending) {
    content = <ActivityIndicator size="large" color="#00b96d" />;
  } else if (products) {
    content = (
      <FlashList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: IProduct }) => <Text>{item.name}</Text>}
      />
    );
  }

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ backgroundColor: "#fff" }}
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
    >
      <BottomSheetView style={{ flex: 1 }}>
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
          <TextInputBar
            searchRef={searchRef}
            handleInputSubmit={handleInputSubmit}
          />
          <Pressable>
            <Ionicons name="barcode-outline" size={24} color="#00b96d" />
          </Pressable>
        </View>
        <View style={{ flex: 1, paddingHorizontal: 2 }} className="mt-4 px-2">
          {content}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
