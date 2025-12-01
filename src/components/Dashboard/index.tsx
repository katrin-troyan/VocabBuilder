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
};
type Word = {
  _id: string;
  en: string;
  ua: string;
  category: string;
  isIrregular?: boolean;
};

export default function Dashboard({
  onAddWordPress,
  onTrainPress,
  showAddWord = true,
}: DashboardProps) {
  const [words, setWords] = useState(mockWords.results);

  return (
    <View>
      <Filters onFilter={setWords} />
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
