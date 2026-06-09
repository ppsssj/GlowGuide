import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="look/[id]" />
        <Stack.Screen name="coaching/[id]" />
        <Stack.Screen name="completed/[id]" />
        <Stack.Screen name="creator/[id]" />
      </Stack>
    </>
  );
}
