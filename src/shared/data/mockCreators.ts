import type { ImageSourcePropType } from "react-native";

export type Creator = {
  id: string;
  name: string;
  title: string;
  location: string;
  bio: string;
  followers: string;
  following: string;
  likes: string;
  avatar: ImageSourcePropType;
};

export const creators: Creator[] = [
  {
    id: "mina-rose",
    name: "Mina Rose",
    title: "Senior MUA",
    location: "Los Angeles",
    bio: "Creating effortless looks for everyday glow. Creator of the Radiant Rose series and warm, coach-like AR sessions.",
    followers: "1.2M",
    following: "850",
    likes: "15M",
    avatar: require("../../../Design/Creator Profile/screen.png")
  },
  {
    id: "sophie-chen",
    name: "Sophie Chen",
    title: "Clean Beauty Educator",
    location: "New York",
    bio: "Soft sculpting, wearable blush placement, and no-fuss complexion lessons.",
    followers: "820K",
    following: "410",
    likes: "7.8M",
    avatar: require("../../../Design/Home/screen.png")
  }
];

export const getCreatorById = (id: string) => creators.find((creator) => creator.id === id) ?? creators[0];
