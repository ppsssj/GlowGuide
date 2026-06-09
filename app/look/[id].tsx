import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../src/shared/components/AppButton";
import { Badge } from "../../src/shared/components/Badge";
import { colors } from "../../src/shared/constants/colors";
import { radius } from "../../src/shared/constants/radius";
import { spacing } from "../../src/shared/constants/spacing";
import { HowToApplyList } from "../../src/features/look/components/HowToApplyList";
import { LookHero } from "../../src/features/look/components/LookHero";
import { ProductList } from "../../src/features/look/components/ProductList";
import { getLookById } from "../../src/shared/data/mockLooks";

export default function LookDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const look = getLookById(id ?? "radiant-rose");

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <LookHero look={look} />
        <View style={styles.stats}>
          <Badge label={look.estimatedTime} />
          <Badge label={look.difficulty} />
          <Badge label={`${look.steps.length} Steps`} />
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summary}>{look.summary}</Text>
          <View style={styles.tags}>
            {look.tags.map((tag) => <Text key={tag} style={styles.tag}>#{tag}</Text>)}
          </View>
        </View>
        <ProductList products={look.products} />
        <HowToApplyList steps={look.steps} />
      </ScrollView>
      <View style={styles.footer}>
        <AppButton label="Start AR Coaching" onPress={() => router.push(`/coaching/${look.id}`)} style={styles.start} />
        <AppButton label="♡" variant="secondary" style={styles.bookmark} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    paddingBottom: 118
  },
  stats: {
    flexDirection: "row",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg
  },
  summaryCard: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.faint
  },
  summary: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22
  },
  tags: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md
  },
  tag: {
    color: colors.primary,
    fontWeight: "900"
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.lg,
    paddingBottom: 28,
    backgroundColor: "rgba(255,255,255,0.92)",
    borderTopWidth: 1,
    borderColor: colors.faint
  },
  start: {
    flex: 1
  },
  bookmark: {
    width: 56,
    paddingHorizontal: 0
  }
});
