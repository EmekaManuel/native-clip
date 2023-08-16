import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import MovieList from "../components/MovieList";

import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={[tw`flex-1`, { backgroundColor: "rgb(23, 23, 23)" }]}
    >
      {/* // back button */}
      <SafeAreaView
        style={[
          tw` z-20 w-full flex-row justify-between items-center items-center px-4 ${topMargin}`,
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

      {/** Person Details **/}
      <View>
        <View
          style={[
            tw`flex-row justify-center `,
            {
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            },
          ]}
        >
          <View
            style={[
              tw`overflow-hidden rounded-full h-72 w-72 items-center border border-gray-500`,
            ]}
          >
            <Image
              source={require("../assets/images/castImage2.png")}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>
        <View style={[tw`mt-6`]}>
          <Text style={[tw`text-white text-3xl font-bold text-center`]}>
            Keanu Reeves
          </Text>
          <Text style={[tw`text-gray-500 text-base text-center`]}>
            London, United Kingdom{" "}
          </Text>
        </View>
        <View
          style={[
            tw`mx-3 p-4 mt-6 flex-row justify-between items-center rounded-full `,
            { backgroundColor: "black" },
          ]}
        >
          <View style={[tw`border-r-2 border-gray-400 px-2 items-center`]}>
            <Text style={[tw`text-white font-semibold`]}>Gender</Text>
            <Text style={[tw`text-white font-semibold`]}>Male</Text>
          </View>
          <View style={[tw`border-r-2 border-gray-400 px-2 items-center`]}>
            <Text style={[tw`text-white font-semibold`]}>Birthday</Text>
            <Text style={[tw`text-white font-semibold`]}>03-01-1992</Text>
          </View>
          <View style={[tw`border-r-2 border-gray-400 px-2 items-center`]}>
            <Text style={[tw`text-white font-semibold`]}>Known For</Text>
            <Text style={[tw`text-white font-semibold`]}>Action</Text>
          </View>
          <View style={[tw` px-2 items-center`]}>
            <Text style={[tw`text-white font-semibold`]}>Popularity</Text>
            <Text style={[tw`text-white font-semibold`]}>72.24</Text>
          </View>
        </View>
        <View style={[tw`my-6 mx-4 w-full`, { padding: "auto" }]}>
          <Text style={[tw`text-white text-lg`]}>Biography</Text>
          <Text style={[tw`text-gray-400 text-base tracking-wide`]}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </Text>
        </View>
        {/** Movies **/}
        <MovieList title={"Movies"} hideSeeAll={true} data={personMovies} />
      </View>
    </ScrollView>
  );
};

export default PersonScreen;
