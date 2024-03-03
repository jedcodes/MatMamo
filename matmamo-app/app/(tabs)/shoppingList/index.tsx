import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import useShoppingListStore from "@/services/stores/shoppingListStore";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import ShoppingListCard from "@/components/ShoppingList/ShoppingListCard";
import { data } from "@/constants/dummyData";
import { FAB } from "@rneui/themed";

export default function shoppingListScreen() {
  const shoppingList = useShoppingListStore(
    (state: IShoppingListState) => state.shoppingList
  );

  // Navigere til SerachScreen
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-whites">
      <StatusBar style="dark" />
      <ScrollView className="p-2 flex-1">
        <View className="flex-row justify-center items-center my-4">
          <Text className="text-2xl font-semibold tracking-wider">
            Min Handle Liste
          </Text>
        </View>
        {data?.length < 0 ? (
          <View className=" justify-center items-center">
            <Text className="text-lg font-bold">No shopping list yet</Text>
          </View>
        ) : (
          <ShoppingListCard />
        )}
      </ScrollView>
      <FAB
        onPress={() => router.push("/(tabs)/shoppingList/ShoppingListScreen")}
        color="#2d554a"
        placement="right"
        size="large"
        icon={<Ionicons name="add" size={26} color={"white"} />}
      />
    </SafeAreaView>
  );
}
