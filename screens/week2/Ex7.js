import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button,StyleSheet, Text, View } from "react-native";

export default function Ex7() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1,
     flexDirection: "row", 
     
     alignItems : "flex-end", }}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "powderblue",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "skyblue",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "steelblue",
        }}
      />
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex8")} />
    </View>
  );
}
