import { View, Text, Animated, Easing, PanResponder } from "react-native";
import React, { useRef } from "react";

export default function useAnimation() {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const pan = useRef(new Animated.ValueXY()).current;


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], {useNativeDriver: false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()

    
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMovement = (initPosition: number) => {
position.setValue(initPosition)
Animated.timing(position, {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
    easing: Easing.bounce,
  }).start();
  }

  return {
    fadeIn,
    fadeOut,
    position,
    opacity,
    startMovement,
    panResponder,
    pan
  };
}
