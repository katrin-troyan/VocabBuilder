import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dictionary from "../../screen/Dictionary";
import Header from "../../components/Header";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dictionary" component={Dictionary} />
      </Stack.Navigator>
    </View>
  );
}
