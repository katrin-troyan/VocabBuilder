import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screen/Auth/Login";
import Registration from "../../screen/Auth/Registration";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}
