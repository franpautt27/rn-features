import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
  title: string;
}

const CustomSwitch = (props: Props) => {
  const { onChange, isOn, title } = props;
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <View style={styles.switchRow}>
      <Text style={styles.switchText}>{title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
