import React from "react";
import Modal from "react-native-modal";
import EditWordForm from "./EditWordForm";
import { Word } from "../../types/word";
import { View } from "react-native";

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
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      backdropOpacity={0}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={{ margin: 0, justifyContent: "flex-end", marginBottom: 50 }}
    >
      <View
        style={{
          height: 460,
          width: "100%",
          backgroundColor: "#ECF0EF",
          paddingHorizontal: 16,
          paddingTop: 40,
        }}
      >
        <EditWordForm word={word} onClose={onClose} onSave={onSave} />
      </View>
    </Modal>
  );
}
