import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { BottomTabBar } from "../../src/shared/components/BottomTabBar";
import { Header } from "../../src/shared/components/Header";
import { colors } from "../../src/shared/constants/colors";
import { CreatorHeader } from "../../src/features/creator/components/CreatorHeader";
import { CreatorLookGrid } from "../../src/features/creator/components/CreatorLookGrid";
import { CreatorStats } from "../../src/features/creator/components/CreatorStats";
import { getCreatorById } from "../../src/shared/data/mockCreators";
import { looks } from "../../src/shared/data/mockLooks";

export default function CreatorProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const creator = getCreatorById(id ?? "mina-rose");
  const creatorLooks = looks.filter((look) => look.creatorId === creator.id);
  const visibleLooks = creatorLooks.length > 0 ? creatorLooks : looks;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header title={creator.name} showBack />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CreatorHeader creator={creator} />
          <CreatorStats creator={creator} />
          <CreatorLookGrid looks={visibleLooks} />
        </ScrollView>
        <BottomTabBar active="profile" />
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
    backgroundColor: colors.background
  }
});
