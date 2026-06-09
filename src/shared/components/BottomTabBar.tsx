import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { colors } from "../constants/colors";
import { radius } from "../constants/radius";

type BottomTabBarProps = {
  active?: "home" | "saved" | "create" | "shop" | "profile";
};

const tabs = [
  { id: "home", label: "Explore", icon: "⌂" },
  { id: "saved", label: "Saved", icon: "♡" },
  { id: "create", label: "Create", icon: "+" },
  { id: "shop", label: "Shop", icon: "◱" },
  { id: "profile", label: "Profile", icon: "◎" }
] as const;

export function BottomTabBar({ active = "home" }: BottomTabBarProps) {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <Pressable
            key={tab.id}
            onPress={() => {
              if (tab.id === "home") router.push("/");
              if (tab.id === "profile") router.push("/creator/mina-rose");
            }}
            style={[styles.tab, tab.id === "create" && styles.createTab]}
          >
            <View style={[styles.iconWrap, isActive && styles.iconActive, tab.id === "create" && styles.createIcon]}>
              <Text style={[styles.icon, isActive && styles.activeText, tab.id === "create" && styles.createText]}>{tab.icon}</Text>
            </View>
            <Text style={[styles.label, isActive && styles.activeText]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 76,
    paddingTop: 8,
    paddingBottom: 14,
    paddingHorizontal: 14,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderTopWidth: 1,
    borderTopColor: colors.faint,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tab: {
    alignItems: "center",
    gap: 2,
    flex: 1
  },
  createTab: {
    marginTop: -18
  },
  iconWrap: {
    minWidth: 28,
    minHeight: 28,
    alignItems: "center",
    justifyContent: "center"
  },
  iconActive: {
    backgroundColor: colors.blushSoft,
    borderRadius: radius.pill,
    paddingHorizontal: 8
  },
  createIcon: {
    width: 52,
    height: 52,
    borderRadius: radius.pill,
    backgroundColor: colors.primary
  },
  icon: {
    color: colors.muted,
    fontSize: 22,
    fontWeight: "800"
  },
  createText: {
    color: colors.surface,
    fontSize: 26
  },
  label: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "700"
  },
  activeText: {
    color: colors.primary
  }
});
