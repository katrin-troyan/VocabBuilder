import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Filters from "../Filters";
import Statistics from "../Statistics";
import { Arrow, Plus } from "../../assets/icons";
import { useState } from "react";
import { mockWords } from "../../data/mockWords";

type DashboardProps = {
  onAddWordPress?: () => void;
  onTrainPress: () => void;
  showAddWord?: boolean;
  onFilter: (words: any[]) => void;
  allWords: any[];
};

export default function Dashboard({
  onAddWordPress,
  onTrainPress,
  showAddWord = true,
  onFilter,
  allWords,
}: DashboardProps) {
  const [words, setWords] = useState(mockWords.results);

  return (
    <View>
      <Filters data={allWords} onFilter={onFilter} />
      <Statistics />
      <View style={styles.wrapper}>
        {showAddWord && (
          <TouchableOpacity style={styles.touchhable} onPress={onAddWordPress}>
            <Text style={styles.text}>Add word</Text>
            <Plus />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.touchhable} onPress={onTrainPress}>
          <Text style={styles.text}>Train oneself</Text>
          <Arrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row", gap: 16, marginBottom: 32 },
  touchhable: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  text: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
  },
});
