import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";

type CoachingProgressProps = {
  title: string;
  current: number;
  total: number;
};

export function CoachingProgress({ title, current, total }: CoachingProgressProps) {
  const percent = `${Math.round(((current + 1) / total) * 100)}%` as `${number}%`;

  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.close}>×</Text>
        <View style={styles.copy}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.step}>Step {current + 1} of {total}</Text>
        </View>
        <Text style={styles.more}>⋯</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: percent }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 18,
    paddingHorizontal: spacing.lg,
    gap: spacing.md
  },
  header: {
    height: 58,
    borderRadius: radius.pill,
    backgroundColor: "rgba(255,255,255,0.68)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg
  },
  close: {
    color: colors.ink,
    fontSize: 28,
    fontWeight: "500"
  },
  copy: {
    alignItems: "center"
  },
  title: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "900"
  },
  step: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
    marginTop: 2
  },
  more: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: "900"
  },
  track: {
    height: 5,
    borderRadius: radius.pill,
    backgroundColor: "rgba(255,255,255,0.34)",
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: radius.pill
  }
});
