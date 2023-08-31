import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import HeaderTitle from "../components/HeaderTitle";
import { globalStyles } from "../theme/appTheme";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setDarkTheme, setLightTheme } from "../redux/slices/themeSlice";

const ChangeThemeScreen = () => {
    const theme = useAppSelector((state)=>state.theme)
    const dispatch = useAppDispatch()
  return (
    <View style={globalStyles.globalMargin}>
      <HeaderTitle title="Theme" />

      <TouchableOpacity
      onPress={()=>{
        if(theme.value ==="light") dispatch(setDarkTheme())
        if(theme.value ==="dark") dispatch(setLightTheme())
      }}
        activeOpacity={0.8}
        style={{
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "center",
          backgroundColor: "blue",
          alignItems: "center",
          width: 200,
          height: 50,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Change theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeThemeScreen;

const styles = StyleSheet.create({});
