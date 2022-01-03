import * as React from "react";
// import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import { Alert } from "react-native";

export function LoginBranch({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");

  const handleSignIn = async (ev) => {
    ev.preventDefault();
    if (!email || !password) {
      Alert.alert("Enter the required field");
    } else {
      const res = await signIn(email, password);
      if (res !== null) {
        navigation.navigate("Dashboard");
      }
    }
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} justifyContent="center" p={4} w="90%" mx="auto">
        <Heading size="lg" color="secondary.500">
          Welcome Branch Manager
        </Heading>
        <Heading color="muted.400" size="xs">
          Login to continue!
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Email
            </FormControl.Label>
            <Input
              borderWidth="3"
              value={email}
              onChangeText={(email) => setEmail(email)}
              // InputLeftElement={<Feather name="mail" size={20} />}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            <Input
              borderWidth="3"
              // InputLeftElement={<Ionicons name="person" size={20} />}
              value={password}
              onChangeText={(password) => setPass(password)}
              type="password"
            />
          </FormControl>
          <VStack space={2} justifyContent="center" alignItems="center" mt={2}>
            <Button
              onPress={handleSignIn}
              colorScheme="cyan"
              width="100%"
              _text={{ color: "white" }}
            >
              Login
            </Button>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
