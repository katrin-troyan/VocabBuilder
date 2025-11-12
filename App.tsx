import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator/AuthNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    FixelDisplayRegular: require("./assets/fronts/FixelDisplay-Regular.otf"),
    FixelDisplaySemiBold: require("./assets/fronts/FixelDisplay-SemiBold.otf"),
    FixelDisplayBold: require("./assets/fronts/FixelDisplay-Bold.otf"),
  });

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
