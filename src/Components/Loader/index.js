import { View, Animated, Easing, StyleSheet, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import RobotoBold from "../RobotoBold";

const Loader = ({ containerStyle }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 900,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]}>
        <View style={styles.circle} />
      </Animated.View>
      {/* <RobotoBold style={styles.text} name={"Loading..."} /> */}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  spinner: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: "#4CAF50",
    borderTopColor: "transparent",
  },
  text: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
    marginTop: 10,
  },
});
