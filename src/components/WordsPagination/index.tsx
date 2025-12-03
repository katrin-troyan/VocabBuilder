import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { First, Last, Next, Prev } from "../../assets/icons";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function WordsPagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  const pagesToShow = [];

  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) pagesToShow.push(i);
  } else {
    pagesToShow.push(1);
    pagesToShow.push(2);
    if (page > 3 && page < totalPages) {
      pagesToShow.push("...");
    }
    if (page > 2 && page < totalPages) {
      pagesToShow.push(page);
    }
    if (page < totalPages - 1) {
      pagesToShow.push("...");
    }
    pagesToShow.push(totalPages);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={page === 1} onPress={() => onPageChange(1)}>
        <View style={[styles.box, page === 1 && styles.disabled]}>
          <First />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={page === 1}
        onPress={() => onPageChange(page - 1)}
      >
        <View style={[styles.box, page === 1 && styles.disabled]}>
          <Prev />
        </View>
      </TouchableOpacity>

      {pagesToShow.map((item, index) =>
        item === "..." ? (
          <Text key={index} style={[styles.box, styles.dots]}>
            ...
          </Text>
        ) : (
          <TouchableOpacity
            key={index}
            onPress={() => onPageChange(item as number)}
          >
            <Text style={[styles.box, item === page && styles.activeBox]}>
              {item}
            </Text>
          </TouchableOpacity>
        )
      )}

      <TouchableOpacity
        disabled={page === totalPages}
        onPress={() => onPageChange(page + 1)}
      >
        <View style={[styles.box, page === totalPages && styles.disabled]}>
          <Next />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={page === totalPages}
        onPress={() => onPageChange(totalPages)}
      >
        <View style={[styles.box, page === totalPages && styles.disabled]}>
          <Last />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  box: {
    minWidth: 34,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",

    fontSize: 13,
    fontFamily: "FixelDisplaySemiBold",
    color: "#121417",
    textAlign: "center",
    textAlignVertical: "center",
  },

  activeBox: {
    backgroundColor: "#85AA9F",
    color: "#FFFFFF",
    borderColor: "#88A59F",
    fontFamily: "FixelDisplaySemiBold",
    fontSize: 13,
  },

  disabled: {
    opacity: 0.3,
  },

  dots: {
    borderWidth: 0,
  },
});
