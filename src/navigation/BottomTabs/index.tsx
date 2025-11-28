import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Book, Edit, Star } from "../../assets/icons";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";
import { RootParamList } from "../types";

type Props = {
  navigation: NavigationProp<RootParamList>;
};

export default function BottomTabs({ navigation }: Props) {
  const [active, setActive] = useState("Dictionary");

  const handlePress = (screen: keyof RootParamList) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => handlePress("Dictionary")}
      >
        <Book
          stroke={active === "Dictionary" ? "#FCFCFC" : "rgba(252,252,252,0.5)"}
        />
        <Text
          style={[
            styles.text,
            {
              color:
                active === "Dictionary" ? "#FCFCFC" : "rgba(252,252,252,0.5)",
            },
          ]}
        >
          Dictionary
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => handlePress("Recommend")}
      >
        <Star
          stroke={active === "Recommend" ? "#FCFCFC" : "rgba(252,252,252,0.5)"}
        />
        <Text
          style={[
            styles.text,
            {
              color:
                active === "Recommend" ? "#FCFCFC" : "rgba(252,252,252,0.5)",
            },
          ]}
        >
          Recommend
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => handlePress("Training")}
      >
        <Edit
          stroke={active === "Training" ? "#FCFCFC" : "rgba(252,252,252,0.5)"}
        />
        <Text
          style={[
            styles.text,
            {
              color:
                active === "Training" ? "#FCFCFC" : "rgba(252,252,252,0.5)",
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
