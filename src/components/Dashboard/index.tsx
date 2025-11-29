import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Filters from "../Filters";
import Statistics from "../Statistics";
import { Arrow, Plus } from "../../assets/icons";

type DashboardProps = {
  onAddWordPress?: () => void;
  onTrainPress: () => void;
  showAddWord?: boolean;
};

export default function Dashboard({
  onAddWordPress,
  onTrainPress,
  showAddWord = true,
}: DashboardProps) {
  return (
    <View>
      <Filters />
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
