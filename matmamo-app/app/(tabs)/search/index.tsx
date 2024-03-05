import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { fetchProducts } from "@/services/api/apiService";
import { useQuery } from "@tanstack/react-query";
import ProductList from "@/components/global/ProductList";
import TextInputBar from "@/components/global/TextInputBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IProduct } from "@/interfaces/IProduct";
import useShoppingListStore from "@/services/stores/shoppingListStore";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function SearchScreen() {
  const searchRef: React.MutableRefObject<string> = useRef("");
  const { clearShoppingList, shoppingList } = useShoppingListStore();
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  console.log(shoppingList);

  const handleInputChange = async () => {};
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
      <FlashList
        estimatedItemSize={114}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={products.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductList products={item} />}
      />
    );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center p-2">
        <TextInputBar
          searchRef={searchRef}
          handleInputChange={handleInputChange}
        />
        <Pressable>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={24}
            color="#00b96d"
          />
        </Pressable>
      </View>
      <View style={{ flex: 1 }} className="p-2">
        {content}
      </View>
      <View className="absolute bottom-3 items-center flex-1 w-full flex-row px-2">
        <Pressable
          onPress={clearShoppingList}
          className="p-4 rounded-xl flex-auto w-32 bg-emerald-200 mr-2 "
        >
          <Text className="text-white font-semibold text-center">
            Slett list
          </Text>
        </Pressable>
        <Pressable
          disabled={shoppingList.length < 0 ? true : false}
          className=" p-4 flex-auto w-64 rounded-xl bg-emerald-600"
        >
          <Text className="text-white font-semibold text-center">
            Legg til liste
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
