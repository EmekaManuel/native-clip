import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";

const ios = Platform.OS == "ios";
const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upComing, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  return (
    <SafeAreaView style={tw`flex-1 bg-black h-full`}>
      <View style={tw`${ios ? "-mb-2" : "mb-3"} p-3`}>
        <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center mx-1`}>
          <Bars3CenterLeftIcon color="white" strokeWidth={2} size={30} />
          <Text style={tw`text-white text-3xl font-bold`}>
            <Text style={tw`text-yellow-400`}>Clip</Text>Hub
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} color="white" strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <TrendingMovies data={trending} />
        <MovieList title="Upcoming" data={upComing} />
        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
