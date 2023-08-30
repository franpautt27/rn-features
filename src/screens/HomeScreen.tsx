import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../theme/appTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MenuItem } from "../interfaces/appInterfaces";
import FlatListMenuItem from "../components/FlatListMenuItem";
import { menuItems } from "../data/menuItems";
import HeaderTitle from "../components/HeaderTitle";





const HomeScreen = () => {
  

 

  const itemSeparator = () =>{
    return (
      <View style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}} />
    );
  }

  return (
    <View style={{ flex: 1 , ...globalStyles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={()=><HeaderTitle title="Opciones de menú"/>}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
