import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../src/shared/components/AppButton";
import { colors } from "../../src/shared/constants/colors";
import { layout } from "../../src/shared/constants/layout";
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
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          <LookHero look={look} />
          <View style={styles.stats}>
            <View style={styles.statPill}>
              <Ionicons name="time" size={17} color={colors.primary} />
              <Text style={styles.statText}>{look.estimatedTime}</Text>
            </View>
            <View style={styles.statPill}>
              <Ionicons name="stats-chart" size={17} color={colors.primary} />
              <Text style={styles.statText}>{look.difficulty}</Text>
            </View>
            <View style={styles.statPill}>
              <Ionicons name="list" size={18} color={colors.primary} />
              <Text style={styles.statText}>{look.steps.length} Steps</Text>
            </View>
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
          <AppButton icon="aperture" label="Start AR Coaching" onPress={() => router.push(`/coaching/${look.id}`)} style={styles.start} />
          <View style={styles.bookmark}>
            <Ionicons name="bookmark" size={22} color={colors.ink} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: layout.maxWidth,
    alignSelf: "center",
    backgroundColor: colors.background
  },
  content: {
    paddingBottom: 118
  },
  stats: {
    flexDirection: "row",
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingTop: 20
  },
  statPill: {
    flex: 1,
    minHeight: 58,
    borderRadius: radius.xl,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.blush,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2
  },
  statText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "900"
  },
  summaryCard: {
    marginHorizontal: spacing.xl,
    marginTop: 18,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 18,
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
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: 28,
    backgroundColor: "rgba(255,255,255,0.92)",
    borderTopWidth: 1,
    borderColor: colors.faint
  },
  start: {
    flex: 1
  },
  bookmark: {
    width: 58,
    height: 58,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.faint,
    alignItems: "center",
    justifyContent: "center"
  }
});
