import { StyleSheet, Text, View } from "react-native";
import { Card } from "../../../shared/components/Card";
import { colors } from "../../../shared/constants/colors";
import { radius } from "../../../shared/constants/radius";
import { spacing } from "../../../shared/constants/spacing";
import type { Product } from "../../../shared/data/mockProducts";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <View style={styles.section}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Product List</Text>
        <Text style={styles.link}>Alternatives</Text>
      </View>
      {products.map((product) => (
        <Card key={product.id} style={styles.product}>
          <View style={styles.productIcon}><Text style={styles.productIconText}>◻</Text></View>
          <View style={styles.productCopy}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productMeta}>{product.brand} - {product.shade}</Text>
          </View>
          <Text style={styles.price}>{product.price}</Text>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    gap: spacing.md
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  heading: {
    color: colors.ink,
    fontSize: 21,
    fontWeight: "900"
  },
  link: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "900"
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: spacing.md
  },
  productIcon: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: colors.blushSoft,
    alignItems: "center",
    justifyContent: "center"
  },
  productIconText: {
    color: colors.primary,
    fontSize: 22
  },
  productCopy: {
    flex: 1
  },
  productName: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "900"
  },
  productMeta: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3
  },
  price: {
    color: colors.primary,
    fontWeight: "900",
    fontSize: 13
  }
});
