import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MenuItem } from "../interfaces/appInterfaces";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import appColors from "../theme/appColors";

interface Props {
  menuItem: MenuItem;
}

export default function FlatListMenuItem(props: Props) {
    const navigation = useNavigation()
  const { menuItem } = props;
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Ionicons name={menuItem.icon} size={19} color={appColors.primary} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <View style={{ flex: 1 }} />
        <Ionicons name={"chevron-forward-outline"} size={19} color={appColors.primary}/>
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
