import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AuthNavigator from "../AuthNavigator";
import HomeNavigator from "../HomeNavigator";

export default function RootNavigator() {
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuth = Boolean(token);

  return isAuth ? <HomeNavigator /> : <AuthNavigator />;
}
