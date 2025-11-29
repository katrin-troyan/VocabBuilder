import { View, StyleSheet } from "react-native";
import Dashboard from "../../components/Dashboard";
import WordsTable from "../../components/WordsTable";
import WordsPagination from "../../components/WordsPagination";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";

export default function Dictionary() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  return (
    <View style={styles.container}>
      <Dashboard
        showAddWord={true}
        onAddWordPress={() => navigation.navigate("AddWord")}
        onTrainPress={() => navigation.navigate("Training")}
      />
      <WordsTable />
      <WordsPagination />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8", padding: 16 },
});
