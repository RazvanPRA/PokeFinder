import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonList from "./src/screens/PokemonList";
import PokemonDetails from "./src/screens/PokemonDetails";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import COLORS from "./src/constants/COLORS";
import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    GlutenSemiBold: require("./assets/fonts/Gluten-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: "Back",
            headerTintColor: COLORS.white,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: COLORS.colorTextDetails },
            headerTitle: () => (
              <View>
                <Image
                  style={{ height: 31, aspectRatio: 5.0967 }}
                  source={require("./assets/PokeLogo.png")}
                />
              </View>
            ),
          }}
        >
          <Stack.Screen name="PokemonList" component={PokemonList} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
