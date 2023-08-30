import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderTitle from "../components/HeaderTitle";
import CustomSwitch from "../components/CustomSwitch";

const SwitchScreen = () => {
  const [estado, setEstado] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const { isActive, isHappy, isHungry } = estado;
  const onChange = (value: boolean, field: keyof typeof estado) => {
    setEstado({
      ...estado,
      [field]: value,
    });
  };
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      
        <CustomSwitch
        title="Is active?"
          onChange={(value) => onChange(value, "isActive")}
          isOn={isActive}
        />
        <CustomSwitch
        title="Is hungry?"
          onChange={(value) => onChange(value, "isHungry")}
          isOn={isHungry}
        />
        <CustomSwitch
        title="Is happy?"
          onChange={(value) => onChange(value, "isHappy")}
          isOn={isHappy}
        />
      <Text style={styles.switchText}>{JSON.stringify(estado, null, 5)}</Text>
    </View>
  );
};

export default SwitchScreen;

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
