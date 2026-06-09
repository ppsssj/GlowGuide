import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "../constants/colors";
import { radius } from "../constants/radius";

type BottomTabBarProps = {
  active?: "home" | "saved" | "create" | "shop" | "profile";
};

const tabs = [
  { id: "home", label: "Explore", icon: "compass-outline", activeIcon: "compass" },
  { id: "saved", label: "Saved", icon: "heart-outline", activeIcon: "heart" },
  { id: "create", label: "Create", icon: "add", activeIcon: "add" },
  { id: "shop", label: "Shop", icon: "bag-outline", activeIcon: "bag" },
  { id: "profile", label: "Profile", icon: "person-outline", activeIcon: "person" }
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
              <Ionicons
                name={isActive ? tab.activeIcon : tab.icon}
                size={tab.id === "create" ? 30 : 23}
                color={tab.id === "create" ? colors.surface : isActive ? colors.primary : colors.muted}
              />
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
  label: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: "700"
  },
  activeText: {
    color: colors.primary
  }
});
