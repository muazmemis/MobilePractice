import { useCustomQuery } from '@/src/hooks/useCustomQuery';
import { Image, Text, View } from 'react-native';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface PokemonResult {
  count: number;
  results: Pokemon[];
}

const Index = () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon';

  const {
    data: pokemonResult,
    isLoading,
    error,
  } = useCustomQuery<PokemonResult>({ queryKey: ['pokemons'] }, API_URL, '?limit=20');

  const {
    data: pokemon,
    isLoading: isLoadingSingle,
    error: errorSingle,
  } = useCustomQuery<Pokemon>({ queryKey: ['pokemon'] }, API_URL, '/25');

  return (
    <View>
      <Text>Hello Hooks</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {/* {pokemonResult &&
        pokemonResult?.results?.map((pokemon) => <Text key={pokemon.name}>{pokemon.name}</Text>)}
      <Text style={{ marginBottom: 20, fontWeight: 'bold', color: 'red' }}>End of List</Text> */}
      {pokemonResult?.results?.map((pokemon) => (
        <Text key={pokemon.name}>{pokemon.name}</Text>
      ))}

      {isLoadingSingle && <Text>Loading single Pokemon...</Text>}
      {errorSingle && <Text>Error: {errorSingle.message}</Text>}
      {pokemon && (
        <>
          <Text>Single Pokemon: {pokemon.name}</Text>
          <Image source={{ uri: pokemon?.sprites.front_default }} className="w-48 h-48" />
        </>
      )}
    </View>
  );
};

export default Index;
