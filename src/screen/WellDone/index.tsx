/*import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const WellDoneScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { correct = [], mistakes = [] } = route.params || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../../assets/images/book.png")}
        style={styles.icon}
      />

      <Text style={styles.title}>Well done</Text>

      <View style={styles.tablesWrapper}>
      
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Correct answers:</Text>
          {correct.length > 0 ? (
            correct.map((word: string, idx: number) => (
              <Text key={idx} style={styles.wordText}>
                {word}
              </Text>
            ))
          ) : (
            <Text style={styles.empty}>No correct</Text>
          )}
        </View>

    
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Mistakes:</Text>
          {mistakes.length > 0 ? (
            mistakes.map((word: string, idx: number) => (
              <Text key={idx} style={styles.wordText}>
                {word}
              </Text>
            ))
          ) : (
            <Text style={styles.empty}>No mistakes</Text>
          )}
        </View>
      </View>

   
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Dictionary")}
      >
        <Text style={styles.btnText}>Return to dictionary</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WellDoneScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 25,
  },
  tablesWrapper: {
    flexDirection: "row",
    gap: 30,
    marginBottom: 40,
  },
  column: {
    width: 130,
  },
  columnTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  wordText: {
    fontSize: 15,
    paddingVertical: 2,
  },
  empty: {
    fontSize: 14,
    color: "#777",
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: "#000",
    borderRadius: 12,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});*/
