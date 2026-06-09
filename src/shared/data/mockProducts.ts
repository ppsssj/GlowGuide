export type Product = {
  id: string;
  category: string;
  brand: string;
  name: string;
  shade: string;
  price: string;
};

export const products: Product[] = [
  { id: "primer", category: "Base", brand: "Glow Beauty", name: "Hydrating Silk Primer", shade: "Universal Clear", price: "$32" },
  { id: "foundation", category: "Base", brand: "Armani", name: "Luminous Silk Foundation", shade: "5.5 Neutral", price: "$69" },
  { id: "blush", category: "Blush", brand: "NARS", name: "Radiant Blush", shade: "Orgasm Peach Pink", price: "$34" },
  { id: "lip", category: "Lip", brand: "Velvet Kiss", name: "Matte Liquid Lipstick", shade: "Ruby Radiance", price: "$24" },
  { id: "contour", category: "Contour", brand: "Westman Atelier", name: "Face Trace Stick", shade: "Biscuit", price: "$48" }
];
