import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./StackNavigation";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
