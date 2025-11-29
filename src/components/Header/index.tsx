import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar, Logout } from "../../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { logout } from "../../redux/auth/authSlice";

export default function Header() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerAvatar}>
        <View style={styles.avatarCircle}>
          <Avatar fill={"#FCFCFC"} />
        </View>
        <Text style={styles.username}>{user?.name ?? "User"}</Text>
      </View>

      <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
        <Logout fill={"#121417"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 69,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 44,
    marginBottom: 8,
  },
  containerAvatar: {
    alignItems: "center",
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#C1D2C3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  username: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 12,
    color: "#121417",
  },
  logoutContainer: {
    position: "absolute",
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  logoutText: {
    fontFamily: "FixelDisplayMedium",
    fontSize: 16,
    lineHeight: 24,
    color: "#85AA9F",
  },
});
