import { StyleSheet, Button, Animated, Text, View, Easing } from "react-native";
import React, { useRef } from "react";
import useAnimation from "../hooks/useAnimation";

const Animation101Screen = () => {
  const { fadeIn, opacity, fadeOut, position, startMovement } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity,
            marginBottom: 20,
            transform: [
              {
                translateX: position,
              },
            ],
          },
        ]}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: "#5856d6",
    width: 150,
    height: 150,
  },
});
