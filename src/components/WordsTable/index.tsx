import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { mockOwnWords } from "../../data/mockOwnWords";
import ProgressBar from "../ProgressBar";
import EditWordModal from "../EditWordModal";
import { Word } from "../../types/word";
import { Delete, EditPen } from "../../assets/icons";

export default function WordsTable({ data }: { data: Word[] }) {
  const [words, setWords] = useState<Word[]>(data);
  const [selectedWord, setSelectedWord] = useState<Word | null>(null);
  const [showActions, setShowActions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleDelete = (id: string) => {
    setWords((prev) => prev.filter((w) => w._id !== id));
    setShowActions(false);
  };

  useEffect(() => {
    setWords(data);
  }, [data]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowActions(false);
        setSelectedWord(null);
      }}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <Text
            style={[styles.cell, styles.cellWord, styles.header]}
            numberOfLines={1}
          >
            Word
          </Text>
          <Text
            style={[styles.cell, styles.cellTranslation, styles.header]}
            numberOfLines={1}
          >
            Translation
          </Text>
          <Text
            style={[styles.cell, styles.cellProgress, styles.header]}
            numberOfLines={1}
          >
            Progress
          </Text>
          <Text
            style={[
              styles.cell,
              styles.cellActions,
              styles.header,
              styles.lastCell,
            ]}
            numberOfLines={1}
          ></Text>
        </View>

        {words.map((item) => (
          <View key={item._id} style={styles.row}>
            <Text style={[styles.cell, styles.cellWord]}>{item.en}</Text>
            <Text style={[styles.cell, styles.cellTranslation]}>{item.ua}</Text>
            <View style={[styles.cell, styles.cellProgress]}>
              <ProgressBar progress={item.progress} />
            </View>

            <View style={[styles.cell, styles.cellActions, styles.lastCell]}>
              <TouchableOpacity
                onPress={() => {
                  if (selectedWord?._id === item._id && showActions) {
                    setShowActions(false);
                  } else {
                    setSelectedWord(item);
                    setShowActions(true);
                  }
                }}
              >
                <Text
                  style={[
                    styles.actions,
                    {
                      color:
                        selectedWord?._id === item._id && showActions
                          ? "#121417"
                          : "rgba(18,20,23,0.5)",
                    },
                  ]}
                >
                  ...
                </Text>
              </TouchableOpacity>

              {selectedWord?._id === item._id && showActions && (
                <View style={styles.actionsBoxRelative}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                      marginBottom: 8,
                    }}
                    onPress={() => {
                      setShowActions(false);
                      setShowEditModal(true);
                    }}
                  >
                    <EditPen />
                    <Text style={styles.actionBtn}>Edit</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                    }}
                    onPress={() =>
                      selectedWord && handleDelete(selectedWord._id)
                    }
                  >
                    <Delete />
                    <Text style={styles.actionBtn}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        ))}

        <EditWordModal
          visible={showEditModal}
          word={selectedWord}
          onClose={() => setShowEditModal(false)}
          onSave={(updated: Word) => {
            setWords((prev) =>
              prev.map((w) => (w._id === updated._id ? updated : w))
            );
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {},

  row: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#DBDBDB",
  },

  cell: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderRightColor: "#DBDBDB",
    textAlign: "center",
    fontFamily: "FixelDisplayMedium",
    fontSize: 14,
    position: "relative",
  },

  cellWord: { flex: 1 },
  cellTranslation: { flex: 1.5 },
  cellProgress: { flex: 1.2 },
  cellActions: { flex: 0.5 },

  lastCell: {
    borderRightWidth: 0,
  },

  header: {
    backgroundColor: "rgba(133, 170, 159, 0.1)",
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    flexWrap: "nowrap",
    flexShrink: 1,
  },

  actions: {
    fontSize: 16,
    textAlign: "center",
  },

  actionsBoxRelative: {
    position: "absolute",
    top: "100%",
    right: 0,
    width: 117,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 100,
  },

  actionBtn: {
    fontSize: 14,
    fontFamily: "FixelDisplayMedium",
  },
});
