import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";
import { ArrowRight } from "../../assets/icons";
import { TrainingResult } from "../../types/training";

export default function TrainingRoom({
  tasks,
  onIndexChange,
  navigation,
}: {
  tasks: any[];
  onIndexChange: (i: number) => void;
  navigation: NativeStackNavigationProp<RootParamList>;
}) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<TrainingResult[]>([]);

  const current = tasks[index];

  const normalize = (value: string) =>
    value.trim().toLowerCase().replace(/\s+/g, " ");

  useEffect(() => {
    onIndexChange(index);
  }, [index, onIndexChange]);

  const onNext = () => {
    const correctAnswer = current.ua;

    const isCorrect =
      answer.trim().length > 0 &&
      normalize(answer) === normalize(correctAnswer);

    setAnswers((prev) => [
      ...prev,
      {
        userAnswer: answer || null,
        correctAnswer,
        isCorrect,
      },
    ]);

    setAnswer("");

    if (index < tasks.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  const onSave = async () => {
    const correctAnswer = current.ua;

    const isCorrect =
      answer.trim().length > 0 &&
      normalize(answer) === normalize(correctAnswer);

    const final = [
      ...answers,
      {
        userAnswer: answer || null,
        correctAnswer,
        isCorrect,
      },
    ];

    navigation.navigate("WellDone", { results: final });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <View style={styles.block}>
          <View style={styles.containerTop}>
            <Text style={styles.label}>Введіть переклад</Text>

            <TextInput
              style={styles.input}
              value={answer}
              onChangeText={setAnswer}
            />
            <View style={styles.rowBetween}>
              {index < tasks.length - 1 && (
                <TouchableOpacity style={styles.wrapperNext} onPress={onNext}>
                  <Text style={styles.next}>Next</Text>
                  <ArrowRight color="rgba(18, 20, 23, 0.5)" />
                </TouchableOpacity>
              )}

              <View style={styles.wrapper}>
                <Image
                  source={require("../../assets/ukraine.png")}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.labelImage}>Ukrainian</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerBottom}>
            <Text style={styles.word}>{current.en}</Text>
            <View style={styles.alignRight}>
              <View style={styles.wrapper}>
                <Image
                  source={require("../../assets/unitedkingdom.png")}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text style={styles.labelImage}>English</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Dictionary")}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 22,
    backgroundColor: "#FcFcFc",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  containerTop: {
    height: 195,
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },
  label: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
    color: "#121417",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 12,
    borderRadius: 8,
    marginBottom: 65,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapperNext: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  next: {
    fontFamily: "FixelDisplayMedium",
    color: "rgba(18, 20, 23, 0.5)",
    fontSize: 16,
    lineHeight: 24,
  },
  wrapper: {
    flexDirection: "row",
    gap: 4.5,
    alignItems: "center",
  },
  image: { width: 28, height: 28 },

  labelImage: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 14,
  },
  containerBottom: {
    height: 195,
    justifyContent: "space-between",
  },

  word: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
    color: "#121417",
    marginTop: 22,
  },
  alignRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  btnRow: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
    width: "100%",
    paddingHorizontal: 16,
  },

  saveBtn: {
    width: "100%",
    height: 56,
    backgroundColor: "#85AA9F",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  saveText: {
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
