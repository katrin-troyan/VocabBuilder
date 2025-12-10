import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";
import { mockOwnWords } from "../../data/mockOwnWords";
import ProgressBar from "../../components/ProgressBar";

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

  useEffect(() => {
    const load = async () => {
      try {
        const data: any = await mockFetchTrainingTasks();
        setTasks(data);
      } catch (e: any) {
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
          Please create or add a word to start the workout. We want to improve
          your vocabulary and develop your knowledge, so please share the words
          you are interested in adding to your study.
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
      <Text style={styles.title}>Training</Text>
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
    fontFamily: "FixelDisplayRegular",
    fontSize: 16,
    color: "#121417",
  },

  title: {
    fontFamily: "FixelDisplaySemiBold",
    fontSize: 20,
    lineHeight: 28,
    color: "#121417",
    marginBottom: 16,
  },

  description: {
    fontFamily: "FixelDisplayRegular",
    fontSize: 16,
    lineHeight: 24,
    color: "#121417",
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
    fontFamily: "FixelDisplayBold",
    color: "#FCFCFC",
    fontSize: 16,
  },

  cancel: {
    fontFamily: "FixelDisplayBold",
    color: "rgba(18, 20, 23, 0.5)",
    fontSize: 16,
  },
});
