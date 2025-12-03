import { View, StyleSheet } from "react-native";
import Dashboard from "../../components/Dashboard";
import WordsTable from "../../components/WordsTable";
import WordsPagination from "../../components/WordsPagination";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";
import { useEffect, useState } from "react";
import { getMockWordsPage } from "../../data/mockPaginatedWords";
import { Word } from "../../types/word";

export default function Dictionary() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  const [page, setPage] = useState(1);
  const [words, setWords] = useState<Word[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadData = async (pageNum: number) => {
    setLoading(true);

    const response = getMockWordsPage(pageNum, 4);

    setWords(response.results);
    setTotalPages(response.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    loadData(page);
  }, [page]);

  return (
    <View style={styles.container}>
      <Dashboard
        showAddWord={true}
        onAddWordPress={() => navigation.navigate("AddWord")}
        onTrainPress={() => navigation.navigate("Training")}
      />
      <WordsTable data={words} />
      <WordsPagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8", padding: 16 },
});
