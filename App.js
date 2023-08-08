import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStackNav from "./components/HomeStackNav";
import ChatScreen from "./pages/ChatScreen";

export default function App() {
  const Tab = createBottomTabNavigator();
  const stack = createNativeStackNavigator();

  useFonts({
    berkshire: require("./assets/fonts/berkshire.ttf"),
  });
  return (
    <NavigationContainer>
      
        <stack.Navigator
          initialRouteName="HomeStackNav"
         >
        <stack.Screen name="Login" options={{
          headerShown: false
        }} >
          {(props) => <LoginScreen {...props}/> }
        </stack.Screen>

        <stack.Screen name="Register" options={{
          headerShown: false
        }} >
        {(props) => <RegisterScreen {...props}/> }
        </stack.Screen>
        <stack.Screen name="HomeStackNav" options={{
          headerShown: false
        }} >
        {(props) => <HomeStackNav {...props}/> }
        </stack.Screen>
        <stack.Screen name="Chat" options={{
          headerShown: false
        }} >
        {(props) => <ChatScreen {...props}/> }
        </stack.Screen>
      </stack.Navigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
