import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Book, Edit, Star } from "../../assets/icons";
import { NavigationProp } from "@react-navigation/native";
import { RootParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  navigation: NavigationProp<RootParamList>;
  activeScreen: keyof RootParamList;
};

export default function BottomTabs({ navigation, activeScreen }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate("Dictionary")}
      >
        <Book
          stroke={
            activeScreen === "Dictionary" ? "#FCFCFC" : "rgba(252,252,252,0.5)"
          }
        />
        <Text
          style={[
            styles.text,
            {
              color:
                activeScreen === "Dictionary"
                  ? "#FCFCFC"
                  : "rgba(252,252,252,0.5)",
            },
          ]}
        >
          Dictionary
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate("Recommend")}
      >
        <Star
          stroke={
            activeScreen === "Recommend" ? "#FCFCFC" : "rgba(252,252,252,0.5)"
          }
        />
        <Text
          style={[
            styles.text,
            {
              color:
                activeScreen === "Recommend"
                  ? "#FCFCFC"
                  : "rgba(252,252,252,0.5)",
            },
          ]}
        >
          Recommend
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate("Training")}
      >
        <Edit
          stroke={
            activeScreen === "Training" ? "#FCFCFC" : "rgba(252,252,252,0.5)"
          }
        />
        <Text
          style={[
            styles.text,
            {
              color:
                activeScreen === "Training"
                  ? "#FCFCFC"
                  : "rgba(252,252,252,0.5)",
            },
          ]}
        >
          Training
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#8CAFA4",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 9,

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },

  text: {
    fontSize: 10,
  },
});
