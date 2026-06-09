import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
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
      <View style={styles.scrim} />
      <View style={styles.topControls}>
        <Pressable onPress={() => router.back()} style={styles.circle}><Text style={styles.controlText}>‹</Text></Pressable>
        <View style={styles.circle}><Text style={styles.share}>↗</Text></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{look.title}</Text>
        <Pressable onPress={() => router.push(`/creator/${look.creatorId}`)} style={styles.creatorRow}>
          <View style={styles.avatar}><Text style={styles.avatarText}>{look.creatorName[0]}</Text></View>
          <View>
            <Text style={styles.creator}>{look.creatorName}</Text>
            <Text style={styles.creatorMeta}>Senior MUA • tap to view profile</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 460,
    backgroundColor: colors.surfaceMuted
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(248,246,246,0.25)"
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
  controlText: {
    color: colors.surface,
    fontSize: 34,
    marginTop: -3
  },
  share: {
    color: colors.surface,
    fontSize: 20,
    fontWeight: "900"
  },
  content: {
    position: "absolute",
    left: spacing.xl,
    right: spacing.xl,
    bottom: spacing.xl
  },
  title: {
    color: colors.ink,
    fontSize: 38,
    lineHeight: 42,
    fontWeight: "900",
    marginBottom: spacing.lg
  },
  creatorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
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
  }
});
