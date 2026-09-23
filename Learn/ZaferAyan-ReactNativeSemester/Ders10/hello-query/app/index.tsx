import { useAddPokemon, useDeletePokemon, usePokemons } from '@/src/hooks/usePokemons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const { data: pokemons } = usePokemons();
  const { mutate: addPokemon } = useAddPokemon();
  const { mutate: deletePokemon } = useDeletePokemon();
  // usss
  const [name, setName] = useState('');

  const handleAdd = () => {
    addPokemon(name);
    setName('');
  };

  const handleDelete = (id: string) => {
    deletePokemon(id);
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} className="p-4 m-4 border" />
      <Button title="Pokemon ekle" onPress={handleAdd} />
      <FlatList
        data={pokemons}
        keyExtractor={({ id }) => id}
        renderItem={({ item: p }) => (
          <View className="flex-row justify-between">
            {/* Pokemon Adı */}
            <Link href={`/${p.id}`}>
              <Text className="text-6xl">{p.name}</Text>
            </Link>
            {/* Silme butonu */}
            <TouchableOpacity onPress={() => handleDelete(p.id)}>
              <Ionicons name="trash" size={48} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Index;
