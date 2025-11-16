import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  image: {
    position: "absolute",
    width: 247,
    height: 191,
    alignSelf: "center",
    marginTop: 64,
    marginBottom: 8,
    zIndex: -1,
  },
  containerText: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ECF0EF",
    paddingTop: 32,
    paddingHorizontal: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 259,
    zIndex: 1,
  },
  title: {
    fontFamily: "FixelDisplaySemiBold",
    fontSize: 30,
    letterSpacing: -0.02 * 30,
    color: "#121417",
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: "FixelDisplayRegular",
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(18, 20, 23, 0.8)",
    marginBottom: 16,
  },
  input: {
    width: 343,
    height: 56,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderColor: "rgba(133, 170, 159, 0.1)",
    borderWidth: 1,
    fontFamily: "FixelDisplayRegular",
    fontSize: 16,
    lineHeight: 24,
    color: "#121417",
    marginBottom: 14,
    position: "relative",
    flexDirection: "row",
    paddingRight: 45,
  },

  passwordIcon: {
    position: "absolute",
    right: 18,
    top: "50%",
    transform: [{ translateY: -15 }],
  },
  button: {
    width: 343,
    height: 56,
    backgroundColor: "#85AA9F",
    borderRadius: 30,
    padding: 16,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: "FixelDisplayBold",
    color: "#FCFCFC",
    fontSize: 16,
  },
  loginText: {
    fontFamily: "FixelDisplayBold",
    color: "rgba(18, 20, 23, 0.5)",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  feedbackRow: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 6,
    marginTop: -6,
    marginBottom: 8,
  },

  validInput: {
    borderColor: "#3CBF61",
    borderWidth: 1,
  },

  invalidInput: {
    borderColor: "#D80027",
    borderWidth: 1,
  },

  error: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-start",
  },
  success: {
    color: "green",
    fontSize: 12,
    alignSelf: "flex-start",
  },

  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalBox: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
    alignItems: "center",
  },

  modalTitle: {
    fontFamily: "FixelDisplayBold",
    fontSize: 20,
    fontWeight: "700",
    color: "#121417",
    marginBottom: 10,
    textAlign: "center",
  },

  modalText: {
    fontFamily: "FixelDisplayRegular",
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },

  modalButton: {
    backgroundColor: "#85AA9F",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },

  modalButtonText: {
    fontFamily: "FixelDisplayBold",
    color: "#FCFCFC",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
