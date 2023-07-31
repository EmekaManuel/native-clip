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
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const MovieScreen = ({}) => {
  const movieName = "Antman and the Wasp: Quantumania";

  const { params: item } = useRoute();
  const navigation = useNavigation();
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [cast, setCast]= useState([1,2,3,4,5])
  const [similarMovies, setSimilarMovies] = useState([1,2,3,4,5])
  

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
            <ChevronLeftIcon
              onPress={() => navigation.goBack()}
              size={28}
              strokeWidth={2.5}
              color="white"
            />
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
            style={[tw`absolute bottom-0`, { width, height: height * 0.4 }]}
          />
        </View>
      </View>

      {/* movie details */}

      <View style={[{ marginTop: -(height * 0.09) }]}>
        <Text
          style={[
            tw`text-white text-center text-3xl pb-2 font-bold tracking-wider`,
          ]}
        >
          {movieName}
        </Text>
        {/**status, release and runtime */}
        <Text
          style={[tw`text-center pb-2 text-base font-semibold`, {color: "rgb(163 163 163)"}]}
        >
          Released • 2020 • 170 minutes
        </Text>
        <View
          style={[
            tw`flex-row flex mx-4 text-center pb-2 justify-center `,
            { marginLeft: 2 },
          ]}
        >
          <Text
            style={[tw`text-base text-center font-semibold `, {color: "rgb(163 163 163)"}]}
          >
            Action •
          </Text>
          <Text
            style={[tw`text-base text-center font-semibold `, {color: "rgb(163 163 163)"}]}
          >
            {""} Thrill •
          </Text>
          <Text
            style={[tw`text-base text-center font-semibold `, {color: "rgb(163 163 163)"}]}
          >
            {""} Comedy
          </Text>
    
        </View>
        <Text
            style={[tw`text-base mx-4 `, {color: "rgb(163 163 163)"}]}
          >
           world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello wor
          </Text>
      </View>
      {/*Cast members*/}
      <Cast navigation={navigation} cast={cast}/>

            {/*similar movies*/}
            <MovieList data={similarMovies} title={"Similar Movies"}/>

    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
