import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";
import { mockOwnWords } from "../../data/mockOwnWords";
import ProgressBar from "../../components/ProgressBar";
import TrainingRoom from "../../components/TrainingRoom";

const mockFetchTrainingTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockOwnWords.results);
    }, 800);
  });
};

export default function TrainingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const load = async () => {
      try {
        const data: any = await mockFetchTrainingTasks();
        setTasks(data);
      } catch {
        setError("Failed to load training tasks");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#85AA9F" />
        <Text style={styles.loadingText}>Loading training...</Text>
      </View>
    );
  }

  if (!tasks.length) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/bloodreport.png")}
          style={styles.image}
        />
        <Text style={styles.title}>
          You don't have a single word to learn right now.
        </Text>

        <Text style={styles.description}>
          Please add a word to start training.
        </Text>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("AddWord")}
        >
          <Text style={styles.addBtnText}>Add word</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProgressBar progress={((currentIndex + 1) / tasks.length) * 100} />

      <TrainingRoom tasks={tasks} onIndexChange={setCurrentIndex} />
      <Button
        title="Test WellDone"
        onPress={() =>
          navigation.navigate("WellDone", { results: ["dog", null, "sun"] })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F8F8F8",
  },
  image: {
    width: 144,
    height: 166,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#121417",
  },

  title: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "600",
  },

  description: {
    fontSize: 16,
    marginBottom: 32,
  },

  addBtn: {
    width: "100%",
    height: 56,
    backgroundColor: "#85AA9F",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  addBtnText: {
    color: "#FCFCFC",
    fontSize: 16,
    fontWeight: "600",
  },

  cancel: {
    color: "rgba(18, 20, 23, 0.5)",
    fontSize: 16,
  },
});
