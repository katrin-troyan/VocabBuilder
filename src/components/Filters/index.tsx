import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ArrowBotton, Search } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { mockWords } from "../../data/mockWords";
import { mockCategories } from "../../data/mockCategories";

export default function Filters() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [verbType, setVerbType] = useState<"regular" | "irregular" | null>(
    null
  );

  const [filteredWords, setFilteredWords] = useState(mockWords.results);

  useEffect(() => {
    const trimmed = search.trim().toLowerCase();

    const timer = setTimeout(() => {
      let words = mockWords.results;

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

      setFilteredWords(words);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, category, verbType]);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <TextInput
          placeholder="Find the word"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
        <Search />
      </View>

      <View style={styles.categories}>
        <TouchableOpacity
          style={[
            styles.categoryBtn,
            category === "all" && styles.activeCategory,
          ]}
          onPress={() => setCategory("all")}
        >
          <Text>All</Text>
        </TouchableOpacity>

        {mockCategories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryBtn,
              category === item && styles.activeCategory,
            ]}
            onPress={() => {
              setCategory(item);
              setVerbType(null);
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {category === "verb" && (
        <View style={styles.radioWrapper}>
          <TouchableOpacity onPress={() => setVerbType("regular")}>
            <Text
              style={[
                styles.radioText,
                verbType === "regular" && styles.activeRadio,
              ]}
            >
              Regular
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setVerbType("irregular")}>
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

      <View style={styles.results}>
        {filteredWords.length === 0 ? (
          <Text>No words found</Text>
        ) : (
          filteredWords.map((item) => (
            <View key={item._id} style={styles.wordCard}>
              <Text style={styles.en}>{item.en}</Text>
              <Text style={styles.ua}>{item.ua}</Text>
            </View>
          ))
        )}
      </View>
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
    paddingVertical: 12,
    height: 48,
    marginBottom: 8,
  },

  input: {
    flex: 1,
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
  },

  select: {
    borderWidth: 1,
    borderColor: "rgba(133, 170, 159, 0.1)",
    borderRadius: 15,
    paddingHorizontal: 24,
    paddingVertical: 12,
    height: 48,
    justifyContent: "center",
  },

  radioWrapper: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },

  radioText: {
    fontSize: 12,
    fontFamily: "FixelDisplayRegular",
    color: "#121417",
  },

  activeRadio: {
    color: "#111827",
    fontWeight: "600",
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

  results: {
    marginTop: 16,
    gap: 12,
  },

  wordCard: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },

  en: {
    fontSize: 16,
    fontWeight: "600",
  },

  ua: {
    fontSize: 14,
    color: "#444",
  },
});
