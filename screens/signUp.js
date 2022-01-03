
import React, { useState } from "react";
import { registration } from "../API/firebaseMethods";
import { Alert } from "react-native";
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  ScrollView,
} from "native-base";

export function SignUp({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePress = async (ev) => {
    ev.preventDefault();
    if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      const response = await registration(email, password, firstName, lastName);
      emptyState();
      if (response !== null) {
        navigation.navigate("Login");
      } else {
        Alert.alert("Masla yaha he!");
      }
    }
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p={2} w="90%" mx="auto">
        <Heading size="lg" color="primary.500">
          Welcome
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign up to continue!
        </Heading>
        <ScrollView>
          <VStack justifyContent="center" space={2} mt={5}>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
              >
                First Name
              </FormControl.Label>
              <Input
                type="text"
                value={firstName}
                onChangeText={(firstName) => {
                  setFirstName(firstName);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
              >
                Last Name
              </FormControl.Label>
              <Input
                type="text"
                value={lastName}
                onChangeText={(lastName) => {
                  setLastName(lastName);
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
              >
                Email
              </FormControl.Label>
              <Input
                value={email}
                onChangeText={(email) => {
                  setEmail(email);
                }}
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
              >
                Password
              </FormControl.Label>
              <Input
                value={password}
                onChangeText={(password) => {
                  setPassword(password);
                }}
                type="password"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
              >
                Confirm Password
              </FormControl.Label>
              <Input
                value={confirmPassword}
                onChangeText={(confirmPassword) => {
                  setConfirmPassword(confirmPassword);
                }}
                type="password"
              />
            </FormControl>
            <VStack space={2} mt={5}>
              <Button
                onPress={handlePress}
                colorScheme="cyan"
                _text={{ color: "white" }}
              >
                SignUp
              </Button>
            </VStack>
          </VStack>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
