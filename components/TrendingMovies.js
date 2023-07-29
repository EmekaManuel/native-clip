import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");


const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Movie", item);
  };
  return (
      <View style={tw`mb-6 `}>
        <Text style={tw`text-white text-xl p-3 mb-5`}>Trending</Text>
        <Carousel
          renderItem={({ item }) => <MovieCard handleClick={handleClick} item={item} />}
          data={data}
          firstItem={1}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.62}
          slideStyle={{ display: "flex", alignItems: "center" }}
        />
      </View>
  );
};
export default TrendingMovies;


const MovieCard = ({ item, handleClick }) => {
  return (
      <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
        <Image
          style={[
            tw`rounded-3xl`,
            { width: width * 0.6, height: height * 0.4 },
          ]}
          source={require("../assets/images/moviePoster1.png")}
        />
      </TouchableWithoutFeedback>
  );
};




const styles = StyleSheet.create({});
