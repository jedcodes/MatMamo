import { View, Text, Pressable } from "react-native";
import React, { useMemo } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ShopppingCardList from "../ShoppingList/ShopppingCardList";

type MyBottomSheetType = {
  sheetRef: React.Ref<BottomSheetModal> | undefined;
};

export default function MyBottomSheet({ sheetRef }: MyBottomSheetType) {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <BottomSheetModal ref={sheetRef} index={1} snapPoints={snapPoints}>
      <BottomSheetView>
        <View className="p-2">
          <View className="flex-row shadow-lg w-full justify-between items-center">
            <Text
              style={{ fontSize: hp(1.7) }}
              className="font-semibold tracking-wider"
            >
              Samling
            </Text>
            <Pressable className="flex-row items-center">
              <Ionicons name="add-outline" size={24} color="#81B9D7" />
              <Text
                style={{ fontSize: hp(1.7) }}
                className="font-semibold tracking-wider text-emerald-500"
              >
                Ny samling
              </Text>
            </Pressable>
          </View>
          {/** Lister med handle lister */}
          <View>
            <ShopppingCardList />
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
}
