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
            <Text style={styles.icon}>‹</Text>
          </Pressable>
        ) : (
          <View style={styles.logo}>
            <Text style={styles.logoText}>G</Text>
          </View>
        )}
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.side}>
        {rightLabel ? <Text style={styles.rightLabel}>{rightLabel}</Text> : <Text style={styles.icon}>⋯</Text>}
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
  logoText: {
    color: colors.surface,
    fontWeight: "900"
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "700"
  },
  rightLabel: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "800"
  }
});
