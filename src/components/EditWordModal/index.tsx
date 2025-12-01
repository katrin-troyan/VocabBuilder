import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Word } from "../../types/word";

type EditWordModalProps = {
  visible: boolean;
  word: Word | null;
  onClose: () => void;
  onSave: (updated: Word) => void;
};

export default function EditWordModal({
  visible,
  word,
  onClose,
  onSave,
}: EditWordModalProps) {
  const [en, setEn] = useState(word?.en || "");
  const [ua, setUa] = useState(word?.ua || "");
  const [error, setError] = useState("");

  const validate = () => {
    const enRegex = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
    const uaRegex = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

    if (!enRegex.test(en)) return "Invalid EN value";
    if (!uaRegex.test(ua)) return "Invalid UA value";
    return "";
  };

  const handleSave = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    if (!word) return;
    onSave({ ...word, en, ua });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.title}>Edit word</Text>

          <TextInput
            value={en}
            onChangeText={setEn}
            placeholder="English"
            style={styles.input}
          />

          <TextInput
            value={ua}
            onChangeText={setUa}
            placeholder="Українською"
            style={styles.input}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <View style={styles.btnRow}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSave}>
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modal: {
    width: "85%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
  },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  error: { color: "red", marginBottom: 10 },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancel: { fontSize: 16, color: "red" },
  save: { fontSize: 16, color: "#4CAF50" },
});
