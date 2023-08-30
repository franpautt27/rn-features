import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import HeaderTitle from "../components/HeaderTitle";
import { globalStyles } from "../theme/appTheme";

const PullToRefreshScreen = () => {
    const [data, setData] = useState<string>("")
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData("Hola mundo")
    }, 1500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={globalStyles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        <HeaderTitle title={data} />
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;

const styles = StyleSheet.create({});
