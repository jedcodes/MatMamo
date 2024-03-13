import { View, Text, ActivityIndicator, Pressable } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { fetchProducts } from "@/services/api/apiService";
import { useQuery } from "@tanstack/react-query";
import ProductList from "@/components/global/ProductList";
import TextInputBar from "@/components/global/TextInputBar";
import { FlashList } from "@shopify/flash-list";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import MyBottomSheet from "@/components/BottomSheet/MyBottomSheet";
import useProductStore from "@/services/stores/productListStore";
import { IProduct } from "@/interfaces/IProduct";

export default function SearchScreen() {
  const { productList, addProduct, toggleProduct, removeProduct } =
    useProductStore();

  const searchRef: React.MutableRefObject<string> = useRef("");

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  let content;

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) content = <ActivityIndicator size="large" color="#00b96d" />;
  if (error) content = <Text>Error: {error.message}</Text>;
  if (products) {
    const productsWithSelection = products.data.map((product) => ({
      ...product,
      isSelected: false,
    }));
    content = (
      <FlashList
        estimatedItemSize={114}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={productsWithSelection}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductList products={item} />}
      />
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center p-2">
        <TextInputBar searchRef={searchRef} />
      </View>
      <View style={{ flex: 1 }} className="p-2">
        {content}
      </View>
      <View className="absolute bottom-3 items-center flex-1 w-full flex-row px-2">
        <Pressable className="p-4 rounded-xl flex-auto w-32 bg-emerald-200 mr-2 ">
          <Text className="text-white font-semibold text-center">
            Slett list
          </Text>
        </Pressable>
        <Pressable
          onPress={handlePresentModalPress}
          disabled={false}
          className=" p-4 flex-auto w-64 rounded-xl bg-emerald-600"
        >
          <Text className="text-white font-semibold text-center">
            Legg til liste
          </Text>
        </Pressable>
        <MyBottomSheet sheetRef={bottomSheetModalRef} />
      </View>
    </SafeAreaView>
  );
}
