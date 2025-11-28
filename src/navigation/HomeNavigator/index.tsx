import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dictionary from "../../screen/Dictionary";
import Header from "../../components/Header";
import { View } from "react-native";
import BottomTabs from "../BottomTabs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Recommend from "../../screen/Recommend";
import Training from "../../screen/Training";
import { RootParamList } from "../types";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dictionary" component={Dictionary} />
        <Stack.Screen name="Recommend" component={Recommend} />
        <Stack.Screen name="Training" component={Training} />
      </Stack.Navigator>

      <BottomTabs navigation={navigation} />
    </View>
  );
}
