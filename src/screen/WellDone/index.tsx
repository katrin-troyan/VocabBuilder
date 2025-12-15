import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";

export default function WellDoneScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const route = useRoute<RouteProp<RootParamList, "WellDone">>();

  const { results = [] } = route.params || {};

  const correct = results.filter((r) => r.isCorrect);
  const mistakes = results.filter((r) => !r.isCorrect);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/openbook.png")}
        style={styles.icon}
      />

      <Text style={styles.title}>Well done</Text>

      <View style={styles.tablesWrapper}>
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Correct answers:</Text>
          {correct.map((r, idx) => (
            <Text key={idx} style={styles.wordText}>
              {r.correctAnswer}
            </Text>
          ))}
        </View>

        <View style={styles.column}>
          <Text style={styles.columnTitle}>Mistakes:</Text>
          {mistakes.map((r, idx) => (
            <Text key={idx} style={styles.wordText}>
              {r.correctAnswer}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 32,
    backgroundColor: "#F8F8F8",
  },
  icon: {
    width: 140,
    height: 112,
    marginBottom: 32,
  },
  title: {
    fontFamily: "FixelDisplaySemiBold",
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 32,
  },
  tablesWrapper: {
    flexDirection: "row",
    gap: 32,
  },
  column: {
    width: 130,
  },
  columnTitle: {
    fontFamily: "FixelDisplayRegular",
    fontSize: 14,
    marginBottom: 8,
    color: "rgba(18, 20, 23, 0.5)",
  },
  wordText: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    color: "#121417",
    marginBottom: 4,
  },
  empty: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    color: "#121417",
    marginBottom: 4,
  },
});
