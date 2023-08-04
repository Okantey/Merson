import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Home, Verify, VerifyCode, Landing } from "./src/screens"
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
  });
};
const Stack = createStackNavigator()


const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} title="Home" options={{
          headerShown: false
        }} />
        <Stack.Screen name="Verify" component={Verify} options={{
          headerShown: true,
          title: "Continue with phone",
          headerStyle: {
            backgroundColor: "#009951",

          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "poppins-regular"

          }
        }} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} options={{
          headerShown: true,
          title: "Verify Phone",
          headerStyle: {
            backgroundColor: "#009951",

          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "poppins-regular"

          }
        }} />
        <Stack.Screen name="Landing" component={Landing} options={{
          headerShown: false,
          title: "Continue with phone",
          headerStyle: {
            backgroundColor: "#009951",

          },
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "poppins-regular"

          }
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;