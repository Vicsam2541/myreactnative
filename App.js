import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import BottomTab from "./navigations/BottomTab";
import HomeStack from "./navigations/HomeStack";
import RootStack from "./navigations/RootStack";
import { AuthContext, AuthContextProvider } from "./hooks/AuthContextProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {/* <BottomTab /> */}
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
