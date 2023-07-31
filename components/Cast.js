import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
const Cast = ({ cast, navigation }) => {
  const characterName = "John Wick";
  const personName = "Keanu Reeves";
  return (
    <View style={[tw`text-base my-6 `]}>
      <Text style={[tw`text-white mx-4 mb-5 font-semibold text-lg `]}>
        {" "}
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate("Person", person)} key={index} style={[tw`items-center mr-4 `]}>
                <View
                  style={[
                    tw`overflow-hidden rounded-full items-center border border-gray-500`, {height:60, width:60}
                  ]}
                >
                  <Image
                    style={[tw`rounded-2xl h-20 items-center w-20 `]}
                    source={require("../assets/images/castImage1.png")}
                  />
                </View>
                <Text style={[tw`text-white text-xs mt-1 `]}>
                  {characterName.length > 10
                    ? characterName.slice(0, 10) + "..."
                    : characterName}
                </Text>
                <Text
                  style={[
                    tw`text-white text-xs mt-1 `,
                    { color: "rgb(163 163 163)" },
                  ]}
                >
                  {personName.length > 10
                    ? personName.slice(0, 10) + "..."
                    : personName}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;
