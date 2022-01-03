import {
  Button,
  NativeBaseProvider,
  VStack,
  Center,
  Image,
} from "native-base";
// import { StyleSheet } from "react-native";

export function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <VStack space={4}>
          <Image
            source={require("../assets/lks.png")}
            style={{ width: 200, height: 200 }}
            alt="KSL"
          />
          <Button
            onPress={() => {
              navigation.navigate("Login");
            }}
            colorScheme="emerald"
            // variant="outline"
            size="lg"
            borderRadius="2xl"
          >
            Login as Public User
          </Button>
          {/* <Button
            onPress={() => {
              navigation.navigate("Signup");
            }}
            colorScheme="emerald"
            // variant="outline"
            size="lg"
            borderRadius="xl"
          >
            Sign up as Public User
          </Button> */}
          {/* <Spacer /> */}
          <Button
            // onPress={() => {
            //   navigation.navigate("Signup");
            // }}
            colorScheme="secondary"
            // variant="outline"
            size="lg"
            borderRadius="2xl"
          >
            Login as Branch Manager
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     width: "100%",
//     height: 70,
//     backgroundColor: "dodgerblue",
//   },
//   background: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
// });
