import { Pressable, StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../../shared/components/AppButton";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";
import { getProductById, type CoachingStep } from "../../../shared/data/mockLooks";

type CoachingBottomSheetProps = {
  step: CoachingStep;
  isLast: boolean;
  onNext: () => void;
  onSkip: () => void;
};

export function CoachingBottomSheet({ step, isLast, onNext, onSkip }: CoachingBottomSheetProps) {
  const product = getProductById(step.productId);

  return (
    <View style={styles.sheet}>
      <View style={styles.handle} />
      <View style={styles.top}>
        <View style={styles.copy}>
          <Text style={styles.label}>{step.title}</Text>
          <Text style={styles.product}>{product.brand} - {product.shade}</Text>
        </View>
        <View style={styles.coverage}>
          <Text style={styles.coverageText}>{step.coverage}%</Text>
        </View>
      </View>
      <Text style={styles.instruction}>{step.instruction}</Text>
      <View style={styles.actions}>
        <Pressable onPress={onSkip} style={styles.skip}><Text style={styles.skipText}>Skip</Text></Pressable>
        <AppButton label={isLast ? "Complete Look" : "Next Step"} onPress={onNext} style={styles.next} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing.xl,
    paddingBottom: 34,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    backgroundColor: "rgba(255,255,255,0.88)",
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.72)",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: -10 },
    elevation: 8
  },
  handle: {
    width: 48,
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: "rgba(117,103,108,0.28)",
    alignSelf: "center",
    marginBottom: spacing.xl
  },
  top: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.md
  },
  copy: {
    flex: 1
  },
  label: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: spacing.sm
  },
  product: {
    alignSelf: "flex-start",
    color: colors.surface,
    fontSize: 11,
    fontWeight: "900",
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6
  },
  coverage: {
    width: 54,
    height: 54,
    borderRadius: radius.pill,
    borderWidth: 4,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  coverageText: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: "900"
  },
  instruction: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
    marginTop: spacing.xl,
    marginBottom: spacing.xl
  },
  actions: {
    flexDirection: "row",
    gap: spacing.md
  },
  skip: {
    minHeight: 52,
    minWidth: 94,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.faint,
    alignItems: "center",
    justifyContent: "center"
  },
  skipText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "900"
  },
  next: {
    flex: 1
  }
});
