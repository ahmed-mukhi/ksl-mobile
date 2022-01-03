import { Container, NativeBaseProvider, View, VStack } from "native-base";
import MapView, { Marker } from "react-native-maps";
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_200ExtraLight,
// } from "@expo-google-fonts/poppins";
import { loggingOut } from "../API/firebaseMethods";
// import { getAuth, onAuthStateChanged } from "@firebase/auth";
// import { AppLoading } from "expo-app-loading";
import { useEffect, useState } from "react";
import { Dimensions, Button, Text, Alert } from "react-native";

// const auth = getAuth();

const markers = [
  {
    branch_name: "Aliabad",
    latitude: 24.9200172,
    longitude: 67.0612345,
  },
  {
    branch_name: "Numaish chowrangi",
    latitude: 24.8732834,
    longitude: 67.0337457,
  },
  {
    branch_name: "Saylani house phase 2",
    latitude: 24.8278999,
    longitude: 67.0688257,
  },
  {
    branch_name: "Touheed commercial",
    latitude: 24.8073692,
    longitude: 67.0357446,
  },
  {
    branch_name: "Sehar Commercial",
    latitude: 24.8138924,
    longitude: 67.0677652,
  },
  {
    branch_name: "Jinnah avenue",
    latitude: 24.8949528,
    longitude: 67.1767206,
  },
  {
    branch_name: "Johar chowrangi",
    latitude: 24.9132328,
    longitude: 67.1246195,
  },
  {
    branch_name: "Johar chowrangi 2",
    latitude: 24.9100704,
    longitude: 67.1208811,
  },
  {
    branch_name: "Hill park",
    latitude: 24.8673515,
    longitude: 67.0724497,
  },
];

export function Dashboard({ navigation }) {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     user === null ? navigation.navigate("Home") : null;
  //   });
  // }, []);

  const [region, setRegion] = useState({
    latitude: 24.9204,
    longitude: 67.1344,
  });
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={{
            longitude: 67.0962,
            latitude: 24.8719,
            latitudeDelta: 0.25,
            longitudeDelta: 0.25,
          }}
          onRegionChangeComplete={(region) => setRegion(region)}
          style={{
            width: Dimensions.get("window").width,
            height: 430,
          }}
        >
          {markers.map((marker, index) => {
            return (
              <Marker
                key={index}
                title={marker.branch_name}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
              />
            );
          })}
        </MapView>
      </View>
      <View style={{ padding: 26 }}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 5,
            // fontFamily: "Poppins_400Regular",
            textDecorationStyle: "dotted",
          }}
        >
          Nearest Branch
        </Text>
        <Text
          style={{
            fontSize: 18,
            textDecorationStyle: "dotted",
            marginBottom: 5,
          }}
        >
          Nearest Aliabad
        </Text>
        <Button
          style={{
            position: "absolute",
            color: "green",
            display: "block",
            height: 80,
            width: "100%",
          }}
          title="Form Request"
          onPress={() => navigation.navigate("Form")}
        />
      </View>
    </NativeBaseProvider>
  );
}
