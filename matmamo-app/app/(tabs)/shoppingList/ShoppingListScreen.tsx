import { View, Text, Pressable } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { FAB } from "@rneui/themed";
import MyBottomSheetModal from "@/components/global/MyBottomSheetModal";

export default function ShoppingListScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const router = useRouter();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView className="p-2 flex-1">
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
        <Pressable>
          <Text>List Title</Text>
        </Pressable>
        <Pressable>
          <Ionicons name="checkmark-circle-outline" size={24} color="black" />
        </Pressable>
      </View>
      <FAB onPress={handlePresentModalPress} size="large" title="Legg til" />
      <MyBottomSheetModal sheetRef={bottomSheetModalRef} />
    </SafeAreaView>
  );
}
