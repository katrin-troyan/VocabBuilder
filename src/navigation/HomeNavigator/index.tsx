import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dictionary from "../../screen/Dictionary";
import Header from "../../components/Header";
import { View } from "react-native";
import BottomTabs from "../BottomTabs";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Recommend from "../../screen/Recommend";
import Training from "../../screen/Training";
import { RootParamList } from "../types";
import AddWord from "../../screen/AddWord";
import { useState } from "react";
import WellDone from "../../screen/WellDone";

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const [activeScreen, setActiveScreen] =
    useState<keyof RootParamList>("Dictionary");

  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Dictionary"
          component={Dictionary}
          listeners={{
            focus: () => setActiveScreen("Dictionary"),
          }}
        />
        <Stack.Screen
          name="Recommend"
          component={Recommend}
          listeners={{
            focus: () => setActiveScreen("Recommend"),
          }}
        />
        <Stack.Screen
          name="Training"
          component={Training}
          listeners={{
            focus: () => setActiveScreen("Training"),
          }}
        />
        <Stack.Screen name="AddWord" component={AddWord} />
      </Stack.Navigator>

      <BottomTabs navigation={navigation} activeScreen={activeScreen} />
    </View>
  );
}
