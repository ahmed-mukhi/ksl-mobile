import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUp } from "./screens/signUp";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Dashboard } from "./screens/Dashboard";
import { Form } from "./screens/Form";
import { LoginBranch } from "./screens/LoginBranch";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Khana Sab K Liye" }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="LoginBranch" component={LoginBranch} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
