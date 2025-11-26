import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { loginSchema } from "../utils/validations";
import { authStyles as styles } from "../styles";
import { ErrorWar, Eye, EyeOff } from "../../../assets/icons";
import CheckBox from "../../../assets/icons/CheckBox";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUser } from "../../../redux/auth/authSlice";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const dispatch = useDispatch<any>();

  const [isPassHidden, setIsPassHidden] = useState(true);
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const navigation = useNavigation();

  const onSubmit = async (data: LoginFormData) => {
    const result = await dispatch(
      loginUser({ email: data.email, password: data.password })
    );

    if (loginUser.rejected.match(result)) {
      setModalVisible(true);
    }
  };

  return (
    <>
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalWrapper}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Error</Text>
            <Text style={styles.modalText}>{error}</Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/illustration.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            Word · Translation · Grammar · Progress
          </Text>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.containerLogin}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>
                  Please enter your login details to continue using our service:
                </Text>

                {/* Email */}
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, value, onBlur } }) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const isError =
                      isEmailTouched &&
                      (value || "").length > 0 &&
                      !emailRegex.test(value || "");
                    const isValid =
                      isEmailTouched && emailRegex.test(value || "");

                    return (
                      <>
                        <View style={{ position: "relative" }}>
                          <TextInput
                            placeholder="Email"
                            value={value}
                            onChangeText={onChange}
                            onBlur={() => {
                              setIsEmailTouched(true);
                              onBlur();
                            }}
                            style={[
                              styles.input,
                              isError && styles.invalidInput,
                              isValid && styles.validInput,
                            ]}
                            keyboardType="email-address"
                            autoCapitalize="none"
                          />
                        </View>

                        {(isError || isValid) && (
                          <View style={styles.feedbackRow}>
                            {isError && <ErrorWar fill="red" />}
                            {isValid && <CheckBox fill="#3CBF61" />}
                            <Text
                              style={isError ? styles.error : styles.success}
                            >
                              {isError
                                ? "Please enter a valid email address"
                                : "Email looks good!"}
                            </Text>
                          </View>
                        )}
                      </>
                    );
                  }}
                />

                {/* Password */}
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, value, onBlur } }) => {
                    const isError =
                      isPasswordTouched &&
                      (value || "").length > 0 &&
                      (value || "").length < 6;
                    const isValid =
                      isPasswordTouched && (value || "").length >= 6;

                    return (
                      <>
                        <View style={{ position: "relative" }}>
                          <TextInput
                            placeholder="Password"
                            value={value}
                            onChangeText={onChange}
                            onBlur={() => {
                              setIsPasswordTouched(true);
                              onBlur();
                            }}
                            style={[
                              styles.input,
                              isError && styles.invalidInput,
                              isValid && styles.validInput,
                            ]}
                            secureTextEntry={isPassHidden}
                          />
                          <TouchableOpacity
                            style={styles.passwordIcon}
                            onPress={() => setIsPassHidden(!isPassHidden)}
                            hitSlop={{
                              top: 18,
                              bottom: 18,
                              right: 18,
                              left: 18,
                            }}
                          >
                            {isPassHidden ? (
                              <EyeOff fill={"#121417"} />
                            ) : (
                              <Eye fill={"#121417"} />
                            )}
                          </TouchableOpacity>
                        </View>

                        {(isError || isValid) && (
                          <View style={styles.feedbackRow}>
                            {isError && <ErrorWar fill="red" />}
                            {isValid && <CheckBox fill="#3CBF61" />}
                            <Text
                              style={isError ? styles.error : styles.success}
                            >
                              {isError
                                ? "Password must be at least 6 characters"
                                : "Password looks good!"}
                            </Text>
                          </View>
                        )}
                      </>
                    );
                  }}
                />

                <TouchableOpacity
                  style={[styles.button, loading && { opacity: 0.7 }]}
                  onPress={handleSubmit(onSubmit)}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator size="small" />
                  ) : (
                    <Text style={styles.buttonText}>Login</Text>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration" as never)}
                >
                  <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
