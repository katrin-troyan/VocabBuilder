import { StyleSheet, View, Text } from "react-native";
import { Avatar, Logout } from "../../assets/icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerAvatar}>
        <View style={styles.burgerBtn}>
          <Avatar fill={"#121417"} />
          <Text style={styles.username}>{user?.name ?? "User"}</Text>
        </View>
      </View>

      <View>
        <Text>Log out</Text>
        <Logout fill={"#121417"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 69,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  containerAvatar: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  username: {
    fontSize: 10,
  },
  burgerBtn: {
    height: 20,
    width: 20,
    gap: 5,
  },
});
