import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";

type TrainingNav = NativeStackNavigationProp<RootParamList>;

export default function TrainingRoom({
  tasks,
  onIndexChange,
}: {
  tasks: any[];
  onIndexChange: (i: number) => void;
}) {
  const navigation = useNavigation<TrainingNav>();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<(string | null)[]>([]);

  const current = tasks[index];

  useEffect(() => {
    onIndexChange(0);
  }, []);

  const onNext = () => {
    setAnswers((prev) => [...prev, answer || null]);
    setAnswer("");

    if (index < tasks.length - 1) {
      setIndex((prev) => {
        const newIndex = prev + 1;
        onIndexChange(newIndex);
        return newIndex;
      });
    }
  };

  const onSave = async () => {
    const final = [...answers, answer || null];

    const mockSend = () =>
      new Promise((resolve) => setTimeout(() => resolve("ok"), 800));

    try {
      await mockSend();
      navigation.navigate("WellDone", { results: final });
    } catch (e) {
      alert("Progress not saved. Returning to Dictionary.");
      navigation.navigate("Dictionary");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.block}>
        <View style={styles.leftCol}>
          <Text style={styles.label}>Enter translation</Text>

          <TextInput
            style={styles.input}
            placeholder="Переклад..."
            value={answer}
            onChangeText={setAnswer}
          />

          {index < tasks.length - 1 && (
            <TouchableOpacity onPress={onNext}>
              <Text style={styles.next}>Next →</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.rightCol}>
          <Text style={styles.word}>{current.en}</Text>
          <Text style={styles.language}>Ukrainian 🇺🇦</Text>
        </View>

        {index === tasks.length - 1 && (
          <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  block: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  leftCol: {
    marginBottom: 24,
  },
  rightCol: {
    alignItems: "flex-end",
    marginBottom: 32,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  next: {
    color: "#85AA9F",
    fontSize: 16,
  },
  word: {
    fontSize: 22,
    fontWeight: "600",
  },
  language: {
    fontSize: 14,
    color: "#666",
  },
  saveBtn: {
    backgroundColor: "#85AA9F",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
