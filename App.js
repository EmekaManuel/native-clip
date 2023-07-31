import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainerRef } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import PersonScreen from "./screens/PersonScreen";

const RootStack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef()

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <RootStack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
        <RootStack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={PersonScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
