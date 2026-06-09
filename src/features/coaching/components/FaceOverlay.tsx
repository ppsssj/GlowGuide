import { StyleSheet, View } from "react-native";
import { colors } from "../../../shared/constants/colors";
import type { CoachingStep } from "../../../shared/data/mockLooks";

type FaceOverlayProps = {
  category: CoachingStep["category"];
};

export function FaceOverlay({ category }: FaceOverlayProps) {
  if (category === "lip") {
    return <View style={styles.lip} />;
  }

  if (category === "contour") {
    return (
      <>
        <View style={[styles.contour, styles.leftContour]} />
        <View style={[styles.contour, styles.rightContour]} />
      </>
    );
  }

  return (
    <>
      <View style={[styles.blush, styles.leftBlush]} />
      <View style={[styles.blush, styles.rightBlush]} />
    </>
  );
}

const styles = StyleSheet.create({
  blush: {
    position: "absolute",
    top: 138,
    width: 96,
    height: 52,
    borderRadius: 48,
    backgroundColor: "rgba(255,169,150,0.46)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.76)"
  },
  leftBlush: {
    left: 35,
    transform: [{ rotate: "-12deg" }]
  },
  rightBlush: {
    right: 35,
    transform: [{ rotate: "12deg" }],
    opacity: 0.72
  },
  lip: {
    position: "absolute",
    bottom: 66,
    width: 96,
    height: 30,
    borderRadius: 40,
    backgroundColor: "rgba(230,25,93,0.44)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.8)"
  },
  contour: {
    position: "absolute",
    top: 156,
    width: 116,
    height: 24,
    borderRadius: 24,
    backgroundColor: "rgba(197,142,116,0.52)",
    borderWidth: 2,
    borderColor: colors.blush
  },
  leftContour: {
    left: 18,
    transform: [{ rotate: "-24deg" }]
  },
  rightContour: {
    right: 18,
    transform: [{ rotate: "24deg" }]
  }
});
