import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const MovieScreen = () => {
  const { params: item } = useRoute();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {}, [item]);

  return (
    <ScrollView
      style={[tw`flex-1`, { backgroundColor: "rgb(23, 23, 23)" }]}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={tw`w-full`}>
        <SafeAreaView
          style={[
            tw`absolute z-20 w-full flex-row justify-between items-center items-center px-4 ${topMargin}`,
          ]}
        >
          <TouchableOpacity style={[tw`bg-yellow-400 p-1 rounded-xl`]}>
            <ChevronLeftIcon onPress={()=> navigation.goBack()} size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon color={isFavorite ? "white" : "gray"} size={35} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/images/moviePoster1.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={[ tw`absolute bottom-0`, { width, height: height * 0.4 }]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
