import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

const MovieList = ({ title, data, hideSeeAll }) => {
  const navigation = useNavigation();
  const movieName = "Antmans and the wasp";
  return (
    <View style={[tw`mb-8`, { marginTop: 16 }]}>
      <View style={[tw`mx-4 flex-row justify-between py-1 items-center`]}>
        <Text style={[tw`text-white text-xl`]}>{title}</Text>

      {
        hideSeeAll ? (
          <TouchableOpacity>
            <Text style={[tw`text-yellow-400 text-lg`]}>See All</Text>
          </TouchableOpacity>) : ""
      }


      </View>
      {/* movie row */}
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Movie", item)}
            >
              <View style={[tw`mr-4 text-white text-xl`, { marginTop: 4 }]}>
                <Image
                  source={require("../assets/images/moviePoster1.png")}
                  style={[
                    tw`rounded-3xl`,
                    { width: width * 0.33, height: height * 0.22 },
                  ]}
                />
                <Text style={[tw`text-white ml-1`]}>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + "..."
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
