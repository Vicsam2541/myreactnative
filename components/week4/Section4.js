import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Section4() {
  return (
    <View style={{ flex: 1, flexDirection: "row", padding: 20, marginTop: -35 }}>
      <View>
      <Text>_______________________________________________________________</Text>
        <Text style={{ fontSize: 20 }}>Hotel Description</Text>
        <Text>
          218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor
          incididunt ut labore et dolore
        </Text>
        
        <Text>_______________________________________________________________</Text>
      </View>
      
    </View>
    
  );
}
