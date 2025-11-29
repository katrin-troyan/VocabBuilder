import { useNavigation } from "@react-navigation/native";
import Dashboard from "../../components/Dashboard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../navigation/types";

export default function RecommendScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();

  return (
    <Dashboard
      showAddWord={false}
      onTrainPress={() => navigation.navigate("Training")}
    />
  );
}
