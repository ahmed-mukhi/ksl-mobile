import React, { useState } from "react";
import { applicationForm } from "../API/firebaseMethods";
// import { Alert } from "react-native";
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
import { Alert } from "react-native";

export const Form = () => {
  const [name, setName] = useState("");
  const [fName, setFName] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [dob, setDob] = useState("");
  const [members, setMembers] = useState("");
  const [income, setIncome] = useState("");

  const emptyState = () => {
    setName("");
    setFName("");
    setCNIC("");
    setDob("");
    setMembers("");
    setIncome("");
  };

  const registerUser = async (ev) => {
    ev.preventDefault();
    if (!name) {
      Alert.alert("Name is required");
    } else if (!fName) {
      Alert.alert("Father Name is required.");
    } else if (!CNIC) {
      Alert.alert("CNIC is required.");
    } else if (!dob) {
      Alert.alert("Dob field is required.");
    } else if (!members) {
      Alert.alert("Field is required!");
    } else if (!income) {
      Alert.alert("Field is required!");
    } else {
      const res = await applicationForm(
        name,
        fName,
        CNIC,
        dob,
        members,
        income
      );
      emptyState();
      if (res !== null) {
        Alert.alert("Mission successfull!");
      } else {
        Alert.alert("Mission abort!");
      }
    }
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p={2} w="90%" mx="auto">
        <Heading size="lg" color="primary.500">
          Ration Application Form
        </Heading>
        <Heading color="muted.400" size="xs">
          Fill in the form to continue!
        </Heading>
        <ScrollView>
          <VStack justifyContent="center" space={2} mt={5}>
            <FormControl>
              <Input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChangeText={(name) => {
                  setName(name);
                }}
              />
            </FormControl>
            <FormControl>
              <Input
                type="text"
                placeholder="Enter Father Name"
                value={fName}
                onChangeText={(fName) => {
                  setFName(fName);
                }}
              />
            </FormControl>
            <FormControl>
              <Input
                value={CNIC}
                onChangeText={(CNIC) => {
                  setCNIC(CNIC);
                }}
                type="number"
                placeholder="CNIC no."
              />
            </FormControl>
            <FormControl>
              <Input
                value={dob}
                onChangeText={(dob) => {
                  setDob(dob);
                }}
                type="text"
                placeholder="Date of Birth"
              />
            </FormControl>
            <FormControl>
              <Input
                value={members}
                onChangeText={(members) => {
                  setMembers(members);
                }}
                type="number"
                placeholder="Total Family Members"
              />
            </FormControl>
            <FormControl>
              <Input
                value={income}
                onChangeText={(income) => {
                  setIncome(income);
                }}
                type="number"
                placeholder="Enter total income"
              />
            </FormControl>
            <VStack space={2} mt={5}>
              <Button
                onPress={registerUser}
                colorScheme="cyan"
                _text={{ backgroundColor : "amber.400",color: "black" }}
              >
                Submit
              </Button>
            </VStack>
          </VStack>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};
