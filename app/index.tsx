import { useMemo, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { BottomTabBar } from "../src/shared/components/BottomTabBar";
import { Header } from "../src/shared/components/Header";
import { colors } from "../src/shared/constants/colors";
import { CategoryTabs } from "../src/features/home/components/CategoryTabs";
import { LookCard } from "../src/features/home/components/LookCard";
import { SearchBar } from "../src/features/home/components/SearchBar";
import { looks } from "../src/shared/data/mockLooks";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredLooks = useMemo(() => {
    if (activeCategory === "All") return looks;
    return looks.filter((look) => look.tags.includes(activeCategory) || look.difficulty === activeCategory);
  }, [activeCategory]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <FlatList
          data={filteredLooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <LookCard look={item} />}
          ListHeaderComponent={
            <>
              <Header title="GlowGuide" rightLabel="Bell" />
              <SearchBar />
              <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
            </>
          }
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
        <BottomTabBar active="home" />
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
  },
  list: {
    paddingBottom: 100
  }
});
