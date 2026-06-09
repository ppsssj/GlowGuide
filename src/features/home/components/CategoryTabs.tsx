import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { categories } from "../../../shared/data/mockLooks";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";

type CategoryTabsProps = {
  active: string;
  onChange: (category: string) => void;
};

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <Pressable key={category} onPress={() => onChange(category)} style={[styles.chip, isActive && styles.activeChip]}>
            <Text style={[styles.label, isActive && styles.activeLabel]}>{category}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md
  },
  chip: {
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.faint,
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  activeChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  label: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800"
  },
  activeLabel: {
    color: colors.surface
  }
});
