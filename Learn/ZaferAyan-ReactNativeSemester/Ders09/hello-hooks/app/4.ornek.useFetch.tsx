import useFetcher from '@/src/hooks/useFetcher';
import { Text, View } from 'react-native';

interface User {
  id: string;
  name: string;
}

interface Pokemon {
  id: string;
  name: string;
}

const Index = () => {
  const pokemonId = 25; // Example Pokémon ID
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const USER_URL = `https://jsonplaceholder.typicode.com/users`;

  const { data: pokemon } = useFetcher<Pokemon>({ url: API_URL });
  const { data: users } = useFetcher<User[]>({ url: USER_URL });

  return (
    <View>
      <Text className="text-6xl">{pokemon?.name}</Text>
      {users?.map((user) => (
        <Text key={user.id} className="text-2xl">
          {user.name}
        </Text>
      ))}
    </View>
  );
};

export default Index;
