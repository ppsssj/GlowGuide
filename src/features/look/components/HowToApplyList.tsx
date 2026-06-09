import { StyleSheet, Text, View } from "react-native";
import { Card } from "../../../shared/components/Card";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";
import type { CoachingStep } from "../../../shared/data/mockLooks";

type HowToApplyListProps = {
  steps: CoachingStep[];
};

export function HowToApplyList({ steps }: HowToApplyListProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>How to Apply</Text>
      {steps.map((step, index) => (
        <Card key={step.id} style={[styles.step, index === 0 && styles.featuredStep]}>
          <View style={styles.stepTop}>
            <View style={[styles.number, index === 0 && styles.activeNumber]}>
              <Text style={[styles.numberText, index === 0 && styles.activeNumberText]}>{index + 1}</Text>
            </View>
            <View style={styles.stepCopy}>
              <Text style={styles.stepLabel}>Step {index + 1}</Text>
              <Text style={styles.stepTitle}>{step.title}</Text>
            </View>
            <Text style={styles.chevron}>{index === 0 ? "⌃" : "⌄"}</Text>
          </View>
          {index === 0 ? <Text style={styles.instruction}>{step.instruction}</Text> : null}
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    gap: spacing.md
  },
  heading: {
    color: colors.ink,
    fontSize: 21,
    fontWeight: "900"
  },
  step: {
    padding: spacing.lg
  },
  featuredStep: {
    borderColor: colors.blush,
    borderWidth: 2
  },
  stepTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
  },
  number: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceMuted,
    alignItems: "center",
    justifyContent: "center"
  },
  activeNumber: {
    backgroundColor: colors.blushSoft
  },
  numberText: {
    color: colors.muted,
    fontWeight: "900"
  },
  activeNumberText: {
    color: colors.primary
  },
  stepCopy: {
    flex: 1
  },
  stepLabel: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  stepTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900",
    marginTop: 2
  },
  chevron: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "900"
  },
  instruction: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: spacing.lg,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.faint
  }
});
