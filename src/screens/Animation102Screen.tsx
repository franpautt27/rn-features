import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import useAnimation from "../hooks/useAnimation";

const Animation102Screen = () => {
  const {panResponder, pan}=useAnimation()
  return (
    <View style={styles.container}>
      <Animated.View {...panResponder.panHandlers} style={[pan.getLayout(),styles.purpleBox]} />
    </View>
  );
};

export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: "#75cedb",
    width: 150,
    height: 150,
  },
});
