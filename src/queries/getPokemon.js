import { gql } from "@apollo/client";
export const getPokemon = gql`
  query MyQuery($name: String!) {
    pokemon_v2_pokemon(where: { name: { _regex: $name } }) {
      name
      id
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
          id
          pokemon_v2_abilityeffecttexts(where: { language_id: { _eq: 9 } }) {
            effect
            short_effect
            language_id
          }
        }
      }
      pokemon_v2_pokemonspecy {
        capture_rate
        pokemon_v2_pokemoncolor {
          name
          id
        }
        pokemon_v2_generation {
          name
        }
        pokemon_v2_pokemonhabitat {
          name
        }
        pokemon_v2_pokemonspecies {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
        id
      }
      weight
      base_experience
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
          id
        }
      }
    }
  }
`;
