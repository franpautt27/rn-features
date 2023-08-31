import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MenuItem } from "../interfaces/appInterfaces";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

interface Props {
  menuItem: MenuItem;
}

export default function FlatListMenuItem(props: Props) {
  const {colors} = useTheme()
    const navigation = useNavigation()
  const { menuItem } = props;
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Ionicons name={menuItem.icon} size={19} color={colors.primary} />
        <Text style={{...styles.itemText, color: colors.text}}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name={"chevron-forward-outline"} size={19} color={colors.primary}/>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 5,
    fontSize: 19,
  },
});
