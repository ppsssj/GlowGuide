import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../shared/constants/colors";
import { spacing } from "../../../shared/constants/spacing";
import type { Creator } from "../../../shared/data/mockCreators";

type CreatorStatsProps = {
  creator: Creator;
};

export function CreatorStats({ creator }: CreatorStatsProps) {
  const stats = [
    { label: "Followers", value: creator.followers },
    { label: "Following", value: creator.following },
    { label: "Likes", value: creator.likes }
  ];

  return (
    <View style={styles.row}>
      {stats.map((stat) => (
        <View key={stat.label} style={styles.stat}>
          <Text style={styles.value}>{stat.value}</Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginHorizontal: spacing.xl,
    marginTop: spacing.xl,
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.faint,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  stat: {
    alignItems: "center"
  },
  value: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: "900"
  },
  label: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
    marginTop: spacing.xs
  }
});
