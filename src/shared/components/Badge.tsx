import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { radius } from "../constants/radius";
import { spacing } from "../constants/spacing";

type BadgeProps = {
  label: string;
  tone?: "primary" | "light" | "dark";
};

export function Badge({ label, tone = "light" }: BadgeProps) {
  return (
    <View style={[styles.badge, styles[tone]]}>
      <Text style={[styles.text, tone === "dark" && styles.darkText]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6
  },
  primary: {
    backgroundColor: colors.primary
  },
  light: {
    backgroundColor: colors.blushSoft
  },
  dark: {
    backgroundColor: "rgba(0,0,0,0.42)"
  },
  text: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "800"
  },
  darkText: {
    color: colors.surface
  }
});
