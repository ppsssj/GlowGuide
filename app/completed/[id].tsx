import { router, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../src/shared/components/AppButton";
import { Card } from "../../src/shared/components/Card";
import { Header } from "../../src/shared/components/Header";
import { BottomTabBar } from "../../src/shared/components/BottomTabBar";
import { colors } from "../../src/shared/constants/colors";
import { layout } from "../../src/shared/constants/layout";
import { radius } from "../../src/shared/constants/radius";
import { spacing } from "../../src/shared/constants/spacing";
import { getLookById, looks as allLooks } from "../../src/shared/data/mockLooks";
import { imageAssets } from "../../src/shared/assets/imageAssets";

export default function CompletedScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const look = getLookById(id ?? "radiant-rose");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Header title="Look Completed!" subtitle="Total time: 14m 22s" showBack />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          <View style={styles.compare}>
            <Image source={imageAssets.completedAfter} style={styles.compareImage} />
            <View style={styles.beforePane} />
            <Text style={[styles.compareLabel, styles.beforeLabel]}>Before</Text>
            <Text style={[styles.compareLabel, styles.afterLabel]}>After</Text>
            <View style={styles.sliderLine}>
              <View style={styles.sliderButton}>
                <Ionicons name="swap-horizontal" size={18} color={colors.primary} />
              </View>
            </View>
          </View>
          <Text style={styles.hint}>Slide to compare your transformation</Text>
          <View style={styles.scoreGrid}>
            <Card style={styles.scoreCard}>
              <View style={styles.scoreRing}><Text style={styles.score}>92%</Text></View>
              <Text style={styles.scoreTitle}>Precision</Text>
              <Text style={styles.scoreMeta}>Expert level accuracy</Text>
            </Card>
            <Card style={styles.scoreCard}>
              <View style={styles.achievement}><Ionicons name="ribbon" size={30} color={colors.primary} /></View>
              <Text style={styles.scoreTitle}>Achievement</Text>
              <Text style={styles.scoreMeta}>Consistency Master</Text>
            </Card>
          </View>
          <View style={styles.actions}>
            <AppButton icon="heart" label="Save to My Looks" />
            <View style={styles.actionRow}>
              <AppButton icon="refresh" label="Try Again" variant="secondary" onPress={() => router.push(`/coaching/${look.id}`)} style={styles.half} />
              <AppButton icon="share-outline" label="Share" variant="secondary" style={styles.half} />
            </View>
          </View>
          <Text style={styles.sectionTitle}>Products Used</Text>
          {look.products.map((product) => (
            <Card key={product.id} style={styles.product}>
              <View style={styles.productImage}>
                {product.image ? <Image source={product.image} style={styles.productAsset} /> : <Ionicons name="cube-outline" size={24} color={colors.primary} />}
              </View>
              <View style={styles.productCopy}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productShade}>{product.shade}</Text>
              </View>
              <Text style={styles.buy}>Buy {product.price}</Text>
            </Card>
          ))}
          <Text style={styles.sectionTitle}>You might also like</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recommendations}>
            {allLooks.filter((item) => item.id !== look.id).map((item) => (
              <View key={item.id} style={styles.recommendationCard}>
                <Image source={item.hero} style={styles.recommendationImage} />
                <View style={styles.recommendationBody}>
                  <Text style={styles.recommendationTitle}>{item.title}</Text>
                  <Text style={styles.recommendationMeta}>{item.difficulty}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
        <BottomTabBar active="saved" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1, width: "100%", maxWidth: layout.maxWidth, alignSelf: "center", backgroundColor: colors.background },
  content: { padding: spacing.lg, paddingBottom: 120 },
  compare: { height: 390, borderRadius: radius.xl, overflow: "hidden", backgroundColor: colors.surfaceMuted },
  compareImage: { width: "100%", height: "100%", resizeMode: "cover" },
  beforePane: { position: "absolute", left: 0, top: 0, bottom: 0, width: "50%", backgroundColor: "rgba(248,246,246,0.5)" },
  compareLabel: { position: "absolute", top: spacing.lg, color: colors.surface, fontSize: 11, fontWeight: "900", backgroundColor: "rgba(0,0,0,0.38)", borderRadius: radius.pill, paddingHorizontal: spacing.md, paddingVertical: 6, textTransform: "uppercase" },
  beforeLabel: { left: spacing.lg },
  afterLabel: { right: spacing.lg, backgroundColor: colors.primary },
  sliderLine: { position: "absolute", left: "50%", top: 0, bottom: 0, width: 3, backgroundColor: colors.surface, alignItems: "center", justifyContent: "center" },
  sliderButton: { width: 42, height: 42, borderRadius: 21, backgroundColor: colors.surface, alignItems: "center", justifyContent: "center" },
  hint: { color: colors.muted, textAlign: "center", marginTop: spacing.md, fontSize: 13, fontWeight: "700" },
  scoreGrid: { flexDirection: "row", gap: spacing.md, marginTop: spacing.xl },
  scoreCard: { flex: 1, alignItems: "center" },
  scoreRing: { width: 66, height: 66, borderRadius: 33, borderWidth: 4, borderColor: colors.primary, alignItems: "center", justifyContent: "center", marginBottom: spacing.md },
  score: { color: colors.primary, fontWeight: "900", fontSize: 18 },
  achievement: { width: 66, height: 66, borderRadius: 33, backgroundColor: colors.blushSoft, alignItems: "center", justifyContent: "center", marginBottom: spacing.md },
  scoreTitle: { color: colors.ink, fontWeight: "900", fontSize: 14 },
  scoreMeta: { color: colors.muted, fontSize: 12, textAlign: "center", marginTop: 3 },
  actions: { gap: spacing.md, marginTop: spacing.xl },
  actionRow: { flexDirection: "row", gap: spacing.md },
  half: { flex: 1 },
  sectionTitle: { color: colors.ink, fontSize: 20, fontWeight: "900", marginTop: spacing.xl, marginBottom: spacing.md },
  product: { flexDirection: "row", alignItems: "center", gap: spacing.md, marginBottom: spacing.md },
  productImage: { width: 64, height: 64, borderRadius: radius.md, backgroundColor: colors.blushSoft, alignItems: "center", justifyContent: "center" },
  productAsset: { width: "100%", height: "100%", borderRadius: radius.md, resizeMode: "cover" },
  productCopy: { flex: 1 },
  brand: { color: colors.primary, fontSize: 11, fontWeight: "900", textTransform: "uppercase" },
  productName: { color: colors.text, fontSize: 14, fontWeight: "900", marginTop: 2 },
  productShade: { color: colors.muted, fontSize: 12, marginTop: 2 },
  buy: { color: colors.primary, fontSize: 12, fontWeight: "900" },
  recommendations: { gap: spacing.md, paddingBottom: spacing.lg },
  recommendationCard: {
    width: 164,
    borderRadius: radius.lg,
    overflow: "hidden",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.faint
  },
  recommendationImage: { width: "100%", height: 190, resizeMode: "cover" },
  recommendationBody: { padding: spacing.md },
  recommendationTitle: { color: colors.ink, fontSize: 13, fontWeight: "900" },
  recommendationMeta: { color: colors.muted, fontSize: 10, fontWeight: "900", marginTop: 4, textTransform: "uppercase" }
});
