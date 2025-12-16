import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import RootNavigator from "./src/navigation/RootNavigator/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    FixelDisplayRegular: require("./assets/fronts/FixelDisplay-Regular.otf"),
    FixelDisplaySemiBold: require("./assets/fronts/FixelDisplay-SemiBold.otf"),
    FixelDisplayBold: require("./assets/fronts/FixelDisplay-Bold.otf"),
    FixelDisplayMedium: require("./assets/fronts/FixelDisplay-Medium.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
