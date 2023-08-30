import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import HeaderTitle from "../components/HeaderTitle";
import { globalStyles } from "../theme/appTheme";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4]);
  const loadMore = () => {
    const newArray: number[] = [];
    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index;
    }
    setNumbers([...numbers, ...newArray]);
  };
  const renderItem = (item: number) => {
    return (
      <Image
        source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
        style={{ width: "100%", height: 400 }}
      />
    );
  };
  return (
    <View>
      {/* <HeaderTitle title="Infinite Scroll" /> */}
      <FlatList
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        data={numbers}
        keyExtractor={(item) => item + ""}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ActivityIndicator size={20} color={"#5856d6"} />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;
const styles = StyleSheet.create({
  text: {
    backgroundColor: "green",
    height: 150,
  },
});
