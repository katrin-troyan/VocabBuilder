import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Word } from "../../types/word";

const mockUpdateWord = async (word: Word): Promise<Word> => {
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

type Props = {
  word: Word | null;
  onClose: () => void;
  onSave: (updated: Word) => void;
};

export default function EditWordForm({ word, onClose, onSave }: Props) {
  const [en, setEn] = useState(word?.en || "");
  const [ua, setUa] = useState(word?.ua || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const enRegex = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
  const uaRegex = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

  const validate = () => {
    if (!ua.trim()) return "Ukrainian field cannot be empty";
    if (!uaRegex.test(ua)) return "Ukrainian is not valid";

    if (!en.trim()) return "English field cannot be empty";
    if (!enRegex.test(en)) return "English is not valid";

    return "";
  };

  const handleSave = async () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    if (!word) return;

    setLoading(true);
    setError("");

    try {
      const updated = await mockUpdateWord({ ...word, en, ua });
      onSave(updated);
      onClose();
    } catch (e: any) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (word) {
      setEn(word.en);
      setUa(word.ua);
      setError("");
    }
  }, [word]);

  return (
    <View style={styles.modal}>
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

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <View style={styles.btnRow}>
        <TouchableOpacity
          style={styles.saveBtn}
          disabled={loading}
          onPress={handleSave}
        >
          <Text style={styles.saveText}>{loading ? "Saving..." : "Save"}</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled={loading} onPress={onClose}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {},
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4.5,
    marginBottom: 8,
  },
  image: { width: 26, height: 26, marginBottom: 4 },
  label: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 14,
    color: "#121417",
  },
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
  error: { color: "red", marginBottom: 10 },
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
});
