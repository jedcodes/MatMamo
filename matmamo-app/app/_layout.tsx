import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { getData } from "../utils/asyncStorage";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function _layout() {
  const [showboarded, setShowboarded] = useState<null | boolean>(null);

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

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
