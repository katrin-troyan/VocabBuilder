import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { mockCategories } from "../../data/mockCategories";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";
import { ArrowBotton } from "../../assets/icons";

export default function AddWord() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<string>("");
  const [verbType, setVerbType] = useState<"regular" | "irregular" | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const [en, setEn] = useState("");
  const [ua, setUa] = useState("");

  const [errors, setErrors] = useState({
    en: "",
    ua: "",
  });

  const validate = () => {
    const newErrors = { en: "", ua: "" };
    let valid = true;

    const enRegex = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
    const uaRegex = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

    if (!ua.trim()) {
      newErrors.ua = "Ukrainian field cannot be empty";
      valid = false;
    } else if (!uaRegex.test(ua.trim())) {
      newErrors.ua = "Ukrainian is not valid";
      valid = false;
    }

    if (!en.trim()) {
      newErrors.en = "English field cannot be empty";
      valid = false;
    } else if (!enRegex.test(en.trim())) {
      newErrors.en = "English is not valid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
  const mockAddWord = async (word: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject({ message: "Server error: try again later" });
        } else {
          resolve(word);
        }
      }, 600);
    });
  };

  const handleSubmit = async () => {
    setServerError("");

    if (!validate()) return;

    setLoading(true);

    try {
      await mockAddWord({
        en,
        ua,
        category,
        verbType: category === "verb" ? verbType : null,
      });

      navigation.navigate("Dictionary", {
        newWord: {
          _id: Date.now().toString(),
          en,
          ua,
          category,
          progress: 0,
          owner: "mock-user",
          isIrregular:
            category === "verb" ? verbType === "irregular" : undefined,
        },
      });
    } catch (e: any) {
      setServerError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Add word</Text>
        <Text style={styles.text}>
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </Text>

        <View style={{ position: "relative" }}>
          <TouchableOpacity
            style={styles.select}
            onPress={() => setIsOpen((prev) => !prev)}
          >
            <Text style={styles.selectText}>
              {category ? category : "Categories"}
            </Text>
            <ArrowBotton />
          </TouchableOpacity>

          {isOpen && (
            <View style={styles.dropdown}>
              {mockCategories.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCategory(item);
                    setVerbType(null);
                    setIsOpen(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
        {category === "verb" && (
          <View style={styles.radioWrapper}>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setVerbType("regular")}
            >
              <View style={styles.radioCircle}>
                {verbType === "regular" && <View style={styles.radioInner} />}
              </View>
              <Text
                style={[
                  styles.radioText,
                  verbType === "regular" && styles.activeRadio,
                ]}
              >
                Regular
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => setVerbType("irregular")}
            >
              <View style={styles.radioCircle}>
                {verbType === "irregular" && <View style={styles.radioInner} />}
              </View>

              <Text
                style={[
                  styles.radioText,
                  verbType === "irregular" && styles.activeRadio,
                ]}
              >
                Irregular
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.wrapper}>
          <Image
            source={require("../../assets/ukraine.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.label}>Ukrainian</Text>
        </View>
        <TextInput value={ua} onChangeText={setUa} style={styles.input} />

        <View style={styles.wrapper}>
          <Image
            source={require("../../assets/unitedkingdom.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.label}>English</Text>
        </View>
        <TextInput value={en} onChangeText={setEn} style={styles.input} />

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.saveText}>{loading ? "Adding..." : "Add"}</Text>
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
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 25,
    backgroundColor: "#F8F8F8",
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontFamily: "FixelDisplaySemiBold",
    lineHeight: 28,
    color: "#121417",
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "FixelDisplayRegular",
    color: "#121417",
    marginBottom: 16,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(133, 170, 159, 0.1)",
    borderRadius: 15,
    paddingHorizontal: 24,
    height: 48,
    marginBottom: 8,
  },
  selectText: {
    fontFamily: "FixelDisplayMedium",
  },

  dropdown: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 10,
    zIndex: 1000,

    shadowColor: "#121417",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  dropdownItem: {
    paddingVertical: 8,
  },

  radioWrapper: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#85AA9F",
    justifyContent: "center",
    alignItems: "center",
  },

  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#85AA9F",
  },

  radioText: {
    fontSize: 12,
    fontFamily: "FixelDisplayRegular",
    color: "#121417",
  },

  activeRadio: {
    fontWeight: "600",
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4.5,
    marginBottom: 8,
  },
  image: { width: 26, height: 26, marginBottom: 4 },

  input: {
    borderWidth: 1,
    borderColor: "rgba(18, 20, 23, 0.1)",
    borderRadius: 15,
    paddingLeft: 24,
    paddingVertical: 12,
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
    color: "#121417",
    marginBottom: 24,
  },
  label: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 14,
    color: "#121417",
  },
  btnRow: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
    width: "100%",
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
  error: {
    color: "red",
    fontSize: 13,
    marginTop: -20,
    marginBottom: 20,
    paddingLeft: 4,
    fontFamily: "FixelDisplayRegular",
  },
});
