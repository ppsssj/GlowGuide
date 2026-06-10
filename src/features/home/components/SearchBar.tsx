import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";

export function SearchBar() {
  return (
    <View style={styles.wrap}>
      <Ionicons name="search" size={19} color={colors.muted} />
      <TextInput
        placeholder="Search looks, creators, products"
        placeholderTextColor={colors.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 48,
    marginHorizontal: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.faint,
    paddingHorizontal: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    fontWeight: "600"
  }
});
