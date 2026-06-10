import { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../src/shared/constants/colors";
import { layout } from "../../src/shared/constants/layout";
import { spacing } from "../../src/shared/constants/spacing";
import { CoachingBottomSheet } from "../../src/features/coaching/components/CoachingBottomSheet";
import { CoachingProgress } from "../../src/features/coaching/components/CoachingProgress";
import { MockCameraView } from "../../src/features/coaching/components/MockCameraView";
import { getLookById } from "../../src/shared/data/mockLooks";

export default function CoachingScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const look = getLookById(id ?? "radiant-rose");
  const [stepIndex, setStepIndex] = useState(0);
  const step = look.steps[stepIndex];
  const isLast = stepIndex >= look.steps.length - 1;

  const advance = () => {
    if (isLast) {
      router.push(`/completed/${look.id}`);
      return;
    }
    setStepIndex((current) => current + 1);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <MockCameraView look={look} stepIndex={stepIndex} />
        <CoachingProgress title={look.title} current={stepIndex} total={look.steps.length} />
        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>Tracking stable</Text>
        </View>
        <View style={styles.toast}>
          <Text style={styles.toastText}>Move slightly upward to the cheekbone</Text>
        </View>
        <View style={styles.controls}>
          <View style={styles.control}><Ionicons name="add" size={22} color={colors.text} /></View>
          <View style={styles.control}><Ionicons name="remove" size={22} color={colors.text} /></View>
          <View style={[styles.control, styles.focus]}><Ionicons name="scan" size={21} color={colors.surface} /></View>
        </View>
        <CoachingBottomSheet step={step} isLast={isLast} onNext={advance} onSkip={advance} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.camera
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: layout.maxWidth,
    alignSelf: "center",
    overflow: "hidden",
    backgroundColor: colors.camera
  },
  status: {
    alignSelf: "flex-end",
    marginRight: spacing.lg,
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.82)",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.success
  },
  statusText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: "900"
  },
  toast: {
    position: "absolute",
    left: spacing.xl,
    right: spacing.xl,
    bottom: "35%",
    borderRadius: 999,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: "center"
  },
  toastText: {
    color: colors.surface,
    fontSize: 13,
    fontWeight: "800"
  },
  controls: {
    position: "absolute",
    right: spacing.lg,
    bottom: "38%",
    gap: spacing.sm
  },
  control: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3
  },
  focus: {
    backgroundColor: colors.primary,
    color: colors.surface
  }
});
