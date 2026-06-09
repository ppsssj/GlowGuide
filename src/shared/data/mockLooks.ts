import type { ImageSourcePropType } from "react-native";
import { imageAssets } from "../assets/imageAssets";
import { products, type Product } from "./mockProducts";

export type CoachingStep = {
  id: string;
  category: "base" | "blush" | "lip" | "contour" | "highlight";
  title: string;
  instruction: string;
  productId: string;
  coverage: number;
};

export type Look = {
  id: string;
  title: string;
  creatorId: string;
  creatorName: string;
  difficulty: string;
  estimatedTime: string;
  tags: string[];
  hero: ImageSourcePropType;
  thumbnail: ImageSourcePropType;
  summary: string;
  products: Product[];
  steps: CoachingStep[];
};

const radiantSteps: CoachingStep[] = [
  { id: "prep", category: "base", title: "Base Prep", instruction: "Apply a thin layer through the T-zone and cheeks using circular motions.", productId: "primer", coverage: 100 },
  { id: "silk", category: "base", title: "Silk Foundation", instruction: "Blend outward from the center of the face for an even, luminous canvas.", productId: "foundation", coverage: 88 },
  { id: "left-blush", category: "blush", title: "Blush - Left Cheek", instruction: "Sweep upward along the cheekbone for a lifted, sun-kissed effect.", productId: "blush", coverage: 40 },
  { id: "right-blush", category: "blush", title: "Blush - Right Cheek", instruction: "Mirror the left side and soften the edge toward the temple.", productId: "blush", coverage: 55 },
  { id: "lip", category: "lip", title: "Soft Rose Lip", instruction: "Press color into the center, then blur outward with a fingertip.", productId: "lip", coverage: 72 }
];

export const looks: Look[] = [
  {
    id: "radiant-rose",
    title: "Radiant Rose Look",
    creatorId: "mina-rose",
    creatorName: "Mina Rose",
    difficulty: "Medium",
    estimatedTime: "12 mins",
    tags: ["Daily", "Blush", "Trending"],
    hero: imageAssets.lookRadiantRose,
    thumbnail: imageAssets.lookRadiantRose,
    summary: "A polished rose glow with lifted blush placement, luminous skin, and a soft blurred lip.",
    products: products.slice(0, 4),
    steps: radiantSteps
  },
  {
    id: "sun-kissed-glow",
    title: "Natural Sun-Kissed Glow",
    creatorId: "sophie-chen",
    creatorName: "Sophie Chen",
    difficulty: "Easy",
    estimatedTime: "15 mins",
    tags: ["Daily", "Blush"],
    hero: imageAssets.lookSunkissed,
    thumbnail: imageAssets.lookSunkissed,
    summary: "A beginner-friendly warm cheek look that teaches cheekbone placement and blending.",
    products: [products[0], products[2], products[3]],
    steps: radiantSteps.slice(0, 4)
  },
  {
    id: "bold-crimson-evening",
    title: "Bold Crimson Evening",
    creatorId: "mina-rose",
    creatorName: "Mina Rose",
    difficulty: "Intermediate",
    estimatedTime: "10 mins",
    tags: ["Lip", "Trending"],
    hero: imageAssets.lookCrimsonLip,
    thumbnail: imageAssets.lookCrimsonLip,
    summary: "A precise velvet lip lesson with clean edges, center saturation, and soft outer blur.",
    products: [products[0], products[3]],
    steps: radiantSteps.filter((step) => step.category === "base" || step.category === "lip")
  },
  {
    id: "sculpted-hd",
    title: "Sculpted High-Definition",
    creatorId: "mina-rose",
    creatorName: "Mina Rose",
    difficulty: "Pro",
    estimatedTime: "25 mins",
    tags: ["Contour", "Glam"],
    hero: imageAssets.lookSculptedHd,
    thumbnail: imageAssets.lookSculptedHd,
    summary: "Precise contour bands and highlight points for a high-definition evening finish.",
    products: [products[1], products[4], products[2]],
    steps: [...radiantSteps, { id: "contour", category: "contour", title: "Contour Band", instruction: "Trace beneath the cheekbone and blend upward, never downward.", productId: "contour", coverage: 35 }]
  },
  {
    id: "peach-velvet",
    title: "Peach Velvet",
    creatorId: "mina-rose",
    creatorName: "Mina Rose",
    difficulty: "Easy",
    estimatedTime: "14 mins",
    tags: ["Daily", "Blush"],
    hero: imageAssets.creatorGridPeach,
    thumbnail: imageAssets.creatorGridPeach,
    summary: "A soft peach complexion look focused on diffused blush edges and balanced glow.",
    products: [products[0], products[1], products[2]],
    steps: radiantSteps.slice(0, 4)
  }
];

export const categories = ["All", "Daily", "Blush", "Lip", "Contour", "Easy", "Trending"];
export const getLookById = (id: string) => looks.find((look) => look.id === id) ?? looks[0];
export const getProductById = (id: string) => products.find((product) => product.id === id) ?? products[0];
