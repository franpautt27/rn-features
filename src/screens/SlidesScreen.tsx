import {
  View,
  Text,
  SafeAreaView,
  ImageSourcePropType,
  Dimensions,
  LogBox,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../theme/appTheme";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";
import useAnimation from "../hooks/useAnimation";
import { useNavigation } from "@react-navigation/native";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../assets/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../assets/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../assets/slide-3.png"),
  },
];

const SlidesScreen = () => {
  const { fadeIn, fadeOut, opacity } = useAnimation();
  const navigation = useNavigation();
  LogBox.ignoreAllLogs(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const width = Dimensions.get("window").width;
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderRadius: 5,
          padding: 40,
          justifyContent: "center",
        }}
      >
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: "center",
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        ...globalStyles.fullScreen,
        backgroundColor: "white",
      }}
    >
      <Carousel
        //   ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => {
          setActiveIndex(index);
          if (index === 2) {
            fadeIn();
            return;
          }
          fadeOut();
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: "#5856d6",
          }}
        />
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (activeIndex === 2) navigation.navigate("HomeScreen" as never);
            }}
            style={{
              flexDirection: "row",
              backgroundColor: "#5856d6",
              width: 150,
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white",
              }}
            >
              Entrar
            </Text>
            <Ionicons name="chevron-forward" size={30} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5856d6",
  },
  subtitle: {
    fontSize: 16,
  },
});
