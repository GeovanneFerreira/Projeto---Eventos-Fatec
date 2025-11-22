import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CadastroScreen from "../../src/screens/CadastroScreen";
import CalendarScreen from "../../src/screens/CalendarScreen";
import EventsScreen from "../../src/screens/EventsScreen";
import HomeScreen from "../../src/screens/HomeScreen";
import InitialScreen from "../../src/screens/InitialScreen";
import NewEventScreen from "../../src/screens/NewEventScreen";
export type RootStackParamList = {
  Home: undefined;
  Cadastro: undefined;
  Perfil: undefined;
  Initial: undefined;
  NewEvent: undefined;
  Calendar: undefined;
  Events: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="NewEvent" component={NewEventScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
    </Stack.Navigator>
  );
}