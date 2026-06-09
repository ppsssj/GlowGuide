import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Badge } from "../../../shared/components/Badge";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";
import type { Look } from "../../../shared/data/mockLooks";

type LookCardProps = {
  look: Look;
};

export function LookCard({ look }: LookCardProps) {
  return (
    <Pressable onPress={() => router.push(`/look/${look.id}`)} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.imageWrap}>
        <Image source={look.thumbnail} style={styles.image} />
        <View style={styles.badges}>
          <Badge label={look.difficulty} />
          <Badge label={look.estimatedTime} tone="dark" />
        </View>
      </View>
      <View style={styles.body}>
        <Pressable onPress={() => router.push(`/creator/${look.creatorId}`)}>
          <View style={styles.creatorRow}>
            <View style={styles.creatorAvatar}>
              <Text style={styles.creatorInitial}>{look.creatorName[0]}</Text>
            </View>
            <Text style={styles.creator}>{look.creatorName}</Text>
          </View>
        </Pressable>
        <Text style={styles.title}>{look.title}</Text>
        <Text style={styles.summary}>{look.summary}</Text>
        <View style={styles.tags}>
          {look.tags.slice(0, 3).map((tag) => (
            <Text key={tag} style={styles.tag}>#{tag}</Text>
          ))}
        </View>
        <View style={styles.cta}>
          <Ionicons name="scan" size={18} color={colors.surface} />
          <Text style={styles.ctaText}>Try in AR</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.faint,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3
  },
  pressed: {
    transform: [{ scale: 0.99 }]
  },
  imageWrap: {
    height: 330,
    backgroundColor: colors.surfaceMuted
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  badges: {
    position: "absolute",
    top: spacing.lg,
    left: spacing.lg,
    flexDirection: "row",
    gap: spacing.sm
  },
  body: {
    padding: spacing.lg
  },
  creatorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.sm
  },
  creatorAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.blushSoft,
    borderWidth: 1,
    borderColor: colors.blush,
    alignItems: "center",
    justifyContent: "center"
  },
  creatorInitial: {
    color: colors.primary,
    fontWeight: "900",
    fontSize: 11
  },
  creator: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "800"
  },
  title: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: "900",
    marginBottom: spacing.sm
  },
  summary: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20
  },
  tags: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md,
    marginBottom: spacing.lg
  },
  tag: {
    color: colors.primary,
    fontWeight: "800",
    fontSize: 12
  },
  cta: {
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.sm
  },
  ctaText: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: "900"
  }
});
