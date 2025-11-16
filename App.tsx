import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator/AuthNavigator";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    FixelDisplayRegular: require("./assets/fronts/FixelDisplay-Regular.otf"),
    FixelDisplaySemiBold: require("./assets/fronts/FixelDisplay-SemiBold.otf"),
    FixelDisplayBold: require("./assets/fronts/FixelDisplay-Bold.otf"),
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}
