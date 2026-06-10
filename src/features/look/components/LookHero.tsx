import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";
import type { Look } from "../../../shared/data/mockLooks";

type LookHeroProps = {
  look: Look;
};

export function LookHero({ look }: LookHeroProps) {
  return (
    <View style={styles.wrap}>
      <Image source={look.hero} style={styles.image} />
      <LinearGradient
        colors={["rgba(0,0,0,0.38)", "rgba(248,246,246,0.08)", colors.background]}
        locations={[0, 0.42, 1]}
        style={styles.scrim}
      />
      <View style={styles.topControls}>
        <Pressable onPress={() => router.back()} style={styles.circle}><Ionicons name="arrow-back" size={21} color={colors.surface} /></Pressable>
        <View style={styles.circle}><Ionicons name="share-social-outline" size={20} color={colors.surface} /></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{look.title}</Text>
        <View style={styles.creatorBlock}>
          <Pressable onPress={() => router.push(`/creator/${look.creatorId}`)} style={styles.creatorRow}>
            <View style={styles.avatar}><Text style={styles.avatarText}>{look.creatorName[0]}</Text></View>
            <View>
              <Text style={styles.creator}>{look.creatorName}</Text>
              <Text style={styles.creatorMeta}>Senior MUA • 1.2M followers</Text>
            </View>
          </Pressable>
          <View style={styles.followButton}>
            <Text style={styles.followText}>Follow</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 450,
    backgroundColor: colors.surfaceMuted
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  topControls: {
    position: "absolute",
    top: 48,
    left: spacing.lg,
    right: spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  circle: {
    width: 42,
    height: 42,
    borderRadius: radius.pill,
    backgroundColor: "rgba(0,0,0,0.28)",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    position: "absolute",
    left: spacing.xl,
    right: spacing.xl,
    bottom: spacing.xl
  },
  title: {
    color: colors.ink,
    fontSize: 37,
    lineHeight: 42,
    fontWeight: "900",
    marginBottom: 22
  },
  creatorBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md
  },
  creatorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    flex: 1
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.surface,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: {
    color: colors.surface,
    fontWeight: "900",
    fontSize: 18
  },
  creator: {
    color: colors.ink,
    fontWeight: "900",
    fontSize: 16
  },
  creatorMeta: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700"
  },
  followButton: {
    height: 42,
    minWidth: 86,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOpacity: 0.24,
    shadowRadius: 13,
    shadowOffset: { width: 0, height: 7 },
    elevation: 3
  },
  followText: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: "900"
  }
});
