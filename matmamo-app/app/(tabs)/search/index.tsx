import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { fetchProducts } from "@/services/api/apiService";
import { useQuery } from "@tanstack/react-query";
import { FlashList } from "@shopify/flash-list";
import { IProduct, ProductResult } from "@/interfaces/IProduct";
import ProductList from "@/components/global/ProductList";

export default function SearchScreen() {
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
  if (products)
    content = (
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#000" }} />
        )}
        data={products.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductList products={item} />}
      />
    );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View style={{ flex: 1 }} className="p-2">
        {content}
      </View>
      <View className="absolute bottom-3 items-center flex-1 w-full flex-row px-2">
        <Pressable className="p-4 rounded-xl flex-auto w-32 bg-emerald-200 mr-2 ">
          <Text>Press</Text>
        </Pressable>
        <Pressable className=" p-4 flex-auto w-64 rounded-xl bg-emerald-600 ">
          <Text>Press</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
