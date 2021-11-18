import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import sobre from "./src/pages/sobre/sobre.js"
import Login from "./src/pages/login/Login"
import cadastro from "./src/pages/cadastro/index.js"
 import Questionario from "./src/pages/formulario/"

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen //Primera pag
          name="Login"
          component={Login}
          options={{
            headerTintColor:"#F00",
            headerShown: false,
          }}
        />

        <Stack.Screen //segunda pag
          name="Sobre"
          component={sobre}
          options={{
            // headerTintColor:"#F00"
            headerShown: false,
          }}
        />

        <Stack.Screen //terceira pag
          name="cadastro"
          component={cadastro}
          options={{
            // headerTintColor:"#F00"
            headerShown: false,
          }}
        />

         <Stack.Screen 
          name="Questionario"
          component={Questionario}
          options={{
            // headerTintColor:"#F00"
            headerShown: false,
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
