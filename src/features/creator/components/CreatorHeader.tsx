import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../../shared/components/AppButton";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";
import type { Creator } from "../../../shared/data/mockCreators";

type CreatorHeaderProps = {
  creator: Creator;
};

export function CreatorHeader({ creator }: CreatorHeaderProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.avatarWrap}>
        <Image source={creator.avatar} style={styles.avatar} />
        <View style={styles.verified}><Ionicons name="checkmark" size={15} color={colors.surface} /></View>
      </View>
      <Text style={styles.name}>{creator.name}</Text>
      <Text style={styles.meta}>{creator.title} • {creator.location}</Text>
      <Text style={styles.bio}>{creator.bio}</Text>
      <View style={styles.actions}>
        <AppButton label="Follow" style={styles.action} />
        <AppButton label="Message" variant="secondary" style={styles.action} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    paddingHorizontal: spacing.xl,
    paddingTop: 22
  },
  avatarWrap: {
    position: "relative"
  },
  avatar: {
    width: 126,
    height: 126,
    borderRadius: radius.pill,
    borderWidth: 4,
    borderColor: colors.surface
  },
  verified: {
    position: "absolute",
    right: 6,
    bottom: 10,
    width: 28,
    height: 28,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.surface,
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    color: colors.ink,
    fontSize: 29,
    fontWeight: "900",
    marginTop: 13
  },
  meta: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "800",
    marginTop: spacing.xs
  },
  bio: {
    color: colors.text,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 20,
    maxWidth: 330
  },
  actions: {
    flexDirection: "row",
    gap: spacing.lg,
    marginTop: 24
  },
  action: {
    flex: 1,
    minWidth: 142,
    minHeight: 48,
    borderRadius: radius.md
  }
});
