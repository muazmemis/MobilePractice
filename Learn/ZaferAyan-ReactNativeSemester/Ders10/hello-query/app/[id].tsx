import { usePokemon, useUpdatePokemon } from '@/src/hooks/usePokemons';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const Detail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: pokemon } = usePokemon(id);

  if (!pokemon) {
    return <Text>Yükleniyor...</Text>;
  }

  return (
    <View>
      <Text className="text-2xl">ID: {pokemon.id}</Text>
      <PokemonForm key={pokemon.id} id={id} initialName={pokemon.name} />
    </View>
  );
};

const PokemonForm = ({ id, initialName }: { id: string; initialName: string }) => {
  const { mutate: updatePokemon } = useUpdatePokemon();
  const [name, setName] = useState(initialName);

  const handleSave = () => {
    updatePokemon({ id, name: name! });
  };

  return (
    <>
      <Text className="text-6xl">Name: {initialName}</Text>
      <TextInput value={name} onChangeText={setName} className="p-4 m-4 text-4xl border" />
      <Button title="Kaydet" onPress={handleSave} />
    </>
  );
};

export default Detail;
