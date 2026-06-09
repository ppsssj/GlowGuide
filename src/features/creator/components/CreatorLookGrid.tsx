import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../shared/constants/colors";
import { imageAssets } from "../../../shared/assets/imageAssets";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";
import type { Look } from "../../../shared/data/mockLooks";

type CreatorLookGridProps = {
  looks: Look[];
};

export function CreatorLookGrid({ looks }: CreatorLookGridProps) {
  return (
    <View style={styles.section}>
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Looks</Text>
        <Text style={styles.tab}>Recipes</Text>
        <Text style={styles.tab}>Series</Text>
      </View>
      <Pressable onPress={() => router.push(`/look/${looks[0]?.id}`)} style={styles.featured}>
        <Image source={imageAssets.creatorFeaturedGoldenHour} style={styles.featuredImage} />
        <View style={styles.featuredScrim} />
        <View style={styles.featuredCopy}>
          <Text style={styles.badge}>Featured Masterclass</Text>
          <Text style={styles.featuredTitle}>Golden Hour Masterclass</Text>
          <View style={styles.tryBadge}>
            <Ionicons name="scan" size={15} color={colors.ink} />
            <Text style={styles.tryBadgeText}>Try in AR</Text>
          </View>
        </View>
      </Pressable>
      <View style={styles.grid}>
        {looks.map((look) => (
          <Pressable key={look.id} onPress={() => router.push(`/look/${look.id}`)} style={styles.tile}>
            <Image source={look.hero} style={styles.tileImage} />
            <View style={styles.tileIcon}><Ionicons name="scan" size={16} color={colors.primary} /></View>
            <Text style={styles.tileTitle}>{look.title}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: spacing.xxl,
    paddingBottom: 110
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: colors.faint,
    paddingHorizontal: spacing.xl
  },
  activeTab: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "900",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: 2,
    borderColor: colors.primary
  },
  tab: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: "800",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg
  },
  featured: {
    height: 250,
    margin: spacing.xl,
    borderRadius: radius.xl,
    overflow: "hidden",
    backgroundColor: colors.surfaceMuted
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  featuredScrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.32)"
  },
  featuredCopy: {
    position: "absolute",
    left: spacing.lg,
    right: spacing.lg,
    bottom: spacing.lg
  },
  badge: {
    alignSelf: "flex-start",
    color: colors.surface,
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: spacing.sm
  },
  featuredTitle: {
    color: colors.surface,
    fontSize: 24,
    fontWeight: "900"
  },
  tryBadge: {
    alignSelf: "flex-start",
    marginTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: "rgba(255,255,255,0.86)",
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  tryBadgeText: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: "900"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.lg,
    paddingHorizontal: spacing.xl
  },
  tile: {
    width: "47%"
  },
  tileImage: {
    width: "100%",
    aspectRatio: 0.75,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceMuted
  },
  tileIcon: {
    position: "absolute",
    right: spacing.sm,
    top: spacing.sm,
    width: 28,
    height: 28,
    borderRadius: radius.sm,
    backgroundColor: "rgba(255,255,255,0.86)",
    alignItems: "center",
    justifyContent: "center"
  },
  tileTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "900",
    marginTop: spacing.sm
  }
});
