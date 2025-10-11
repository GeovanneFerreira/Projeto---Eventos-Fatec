import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./app/(tabs)/index";

 
export default function App() {
  return (
<NavigationContainer>
<RootStack />
</NavigationContainer>
  );
}