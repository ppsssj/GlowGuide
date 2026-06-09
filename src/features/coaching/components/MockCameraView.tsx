import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../../shared/constants/colors";
import type { Look } from "../../../shared/data/mockLooks";
import { FaceOverlay } from "./FaceOverlay";

type MockCameraViewProps = {
  look: Look;
  stepIndex: number;
};

export function MockCameraView({ look, stepIndex }: MockCameraViewProps) {
  return (
    <View style={styles.camera}>
      <Image source={look.hero} style={styles.image} blurRadius={1} />
      <View style={styles.dim} />
      <View style={styles.faceGuide}>
        <View style={styles.faceOval} />
        <FaceOverlay category={look.steps[stepIndex]?.category ?? "blush"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.camera
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.78
  },
  dim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(32,20,24,0.28)"
  },
  faceGuide: {
    position: "absolute",
    top: "19%",
    left: "10%",
    right: "10%",
    height: "46%",
    alignItems: "center",
    justifyContent: "center"
  },
  faceOval: {
    width: 230,
    height: 310,
    borderRadius: 140,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.55)"
  }
});
