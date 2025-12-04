import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ArrowBotton, Search } from "../../assets/icons";
import { useEffect, useState } from "react";
import { mockWords } from "../../data/mockWords";
import { mockCategories } from "../../data/mockCategories";
import { Word } from "../../types/word";

type FiltersProps = {
  data: Word[];
  onFilter: (words: Word[]) => void;
};

export default function Filters({ data, onFilter }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [verbType, setVerbType] = useState<"regular" | "irregular" | null>(
    null
  );

  useEffect(() => {
    const trimmed = search.trim().toLowerCase();

    const timer = setTimeout(() => {
      let words = data;

      if (trimmed) {
        words = words.filter((word) => word.en.toLowerCase().includes(trimmed));
      }

      if (category !== "all") {
        words = words.filter((word) => word.category === category);
      }

      if (category === "verb" && verbType) {
        words = words.filter(
          (word) => word.isIrregular === (verbType === "irregular")
        );
      }

      onFilter(words);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, category, verbType, data]);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Find the word"
          placeholderTextColor="#121417"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
        <Search />
      </View>

      <TouchableOpacity
        style={styles.select}
        onPress={() => setIsOpen((prev) => !prev)}
      >
        <Text style={styles.selectText}>
          {category === "all" ? "Categories" : category}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },

  searchWrapper: {
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

  input: {
    flex: 1,
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
    color: "#121417",
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
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
    marginBottom: 12,
  },

  categoryBtn: {
    borderWidth: 1,
    borderColor: "rgba(133, 170, 159, 0.3)",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  activeCategory: {
    backgroundColor: "rgba(133, 170, 159, 0.15)",
  },

  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 6,
    elevation: 5,
    shadowColor: "#121417",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  dropdownItem: {
    paddingVertical: 8,
  },

  selectText: {
    fontFamily: "FixelDisplayMedium",
  },
  radioWrapper: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
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
});
