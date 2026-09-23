import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

interface Pokemon {
  name: string;
}

interface PokemonResult {
  count: number;
  results: Pokemon[];
}

const Index = () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  const {
    data: pokemonResult,
    isLoading,
    error,
  } = useQuery<PokemonResult>({ queryKey: ['pokemon'], queryFn: getPokemon });

  async function getPokemon() {
    const response = await fetch(API_URL);
    return response.json();
  }

  return (
    <View>
      <Text>Hello Hooks</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {pokemonResult &&
        pokemonResult.results.map((pokemon) => <Text key={pokemon.name}>{pokemon.name}</Text>)}
    </View>
  );
};

export default Index;