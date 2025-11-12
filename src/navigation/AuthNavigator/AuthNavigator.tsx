import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Registration from "../../screen/Auth/Registration";
import Login from "../../screen/Auth/Login";

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}
