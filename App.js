import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonList from "./src/screens/PokemonList";
import PokemonDetails from "./src/screens/ProfilePoke";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Gluten.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PokemonList" component={PokemonList} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
