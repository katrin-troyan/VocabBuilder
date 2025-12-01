import { View, Text, StyleSheet } from "react-native";
import { mockOwnWords } from "../../data/mockOwnWords";

export default function Statistics() {
  const toStudy = mockOwnWords.results.length;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        To study: <Text style={styles.number}>{toStudy}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },

  text: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 14,
    color: "rgba(18, 20, 23, 0.5)",
  },

  number: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 20,
    color: "#121417",
  },
});
