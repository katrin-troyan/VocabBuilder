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

export default function Filters() {
  const dispatch = useDispatch();

  const categories = useSelector((state: RootState) => state.categories.items);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [verbType, setVerbType] = useState<"regular" | "irregular" | null>(
    null
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    const trimmed = search.trim();

    const timer = setTimeout(() => {
      console.log("Send search query:", {
        keyword: trimmed,
        category,
        verbType,
      });
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

      <TouchableOpacity style={styles.select}>
        <Text>{category === "all" ? "Categories" : category}</Text>
        <ArrowBotton />
      </TouchableOpacity>

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
});
