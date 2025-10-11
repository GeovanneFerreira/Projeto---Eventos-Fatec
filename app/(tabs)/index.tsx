import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../../src/screens/HomeScreen";
import InitialScreen from "../../src/screens/InitialScreen";
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
  Dashboard: undefined;
  Perfil: undefined;
  Initial: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Initial" component={InitialScreen} />
    </Stack.Navigator>
  );
}