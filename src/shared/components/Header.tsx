import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { colors } from "../constants/colors";
import { radius } from "../constants/radius";

type HeaderProps = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  rightLabel?: string;
};

export function Header({ title, subtitle, showBack, rightLabel }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.side}>
        {showBack ? (
          <Pressable onPress={() => router.back()} style={styles.iconButton}>
            <Ionicons name="chevron-back" size={22} color={colors.ink} />
          </Pressable>
        ) : (
          <View style={styles.logo}>
            <Ionicons name="sparkles" size={16} color={colors.surface} />
          </View>
        )}
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.side}>
        {rightLabel ? (
          <View style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={20} color={colors.text} />
          </View>
        ) : (
          <Ionicons name="ellipsis-horizontal" size={24} color={colors.text} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.background
  },
  side: {
    width: 48,
    alignItems: "center"
  },
  titleWrap: {
    alignItems: "center",
    flex: 1
  },
  title: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: "900"
  },
  subtitle: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "800",
    marginTop: 2,
    textTransform: "uppercase"
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center"
  },
  rightLabel: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "800"
  }
});
