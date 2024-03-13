import { SplashScreen, Stack } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { getData } from "../utils/asyncStorage";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const queryClient = new QueryClient();

export default function _layout() {
  const [fontsLoaded, fontError] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const [showboarded, setShowboarded] = useState<null | boolean>(null);

  const checkIfAlreadyOnboarded = async () => {
    // check if user has already onboarded
    const onboarded = await getData("onboarded");
    // if yes, redirect to home screen
    if (onboarded === "1") {
      setShowboarded(false);
    } else {
      setShowboarded(true);
    }
  };

  if (showboarded === null) return null;

  if (showboarded) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="/" />
      </Stack>
    );
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
            </Stack>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    );
  }
}
