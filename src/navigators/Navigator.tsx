// In App.js in a new project

import * as React from "react";
import { View, Text, useColorScheme, AppState, Appearance } from "react-native";
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import Animation101Screen from "../screens/Animation101Screen";
import Animation102Screen from "../screens/Animation102Screen";
import SwitchScreen from "../screens/SwitchScreen";
import AlertScreen from "../screens/AlertScreen";
import TextInputScreen from "../screens/TextInputScreen";
import PullToRefreshScreen from "../screens/PullToRefreshScreen";
import SectionListScreen from "../screens/SectionListScreen";
import ModalScreen from "../screens/ModalScreen";
import InfiniteScrollScreen from "../screens/InfiniteScrollScreen";
import SlidesScreen from "../screens/SlidesScreen";
import ChangeThemeScreen from "../screens/ChangeThemeScreen";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setDarkTheme, setTheme } from "../redux/slices/themeSlice";

const Stack = createNativeStackNavigator();

function Navigator() {
  const colorScheme = useColorScheme()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    AppState.addEventListener("change", (status)=>{
      if(status=="active"){
        dispatch(setTheme(Appearance.getColorScheme()))
        console.log(Appearance.getColorScheme())
      }
    })
  }, [])
  

  const currentThemeValue = useAppSelector((state) => state.theme);
  const lightTheme: Theme = {
    dark: false,
    colors: {
     ...DefaultTheme.colors
    },
  };
  const darkTheme: Theme = {
    dark: true,
    colors: {
      ...DarkTheme.colors
    },
  };
  const selectedTheme = currentThemeValue.value === "light" ? lightTheme : darkTheme
  return (
    <View style={{flex: 1, backgroundColor: (selectedTheme.colors.background) }}>
    <NavigationContainer
    
      theme={selectedTheme}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen
          name="PullToRefreshScreen"
          component={PullToRefreshScreen}
        />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

export default Navigator;
