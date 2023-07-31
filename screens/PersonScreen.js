import { Text, View, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";


const PersonScreen = () => {
  return (
    <View>
      <Text>PersonScreen</Text>
    </View>
  )
}

export default PersonScreen

