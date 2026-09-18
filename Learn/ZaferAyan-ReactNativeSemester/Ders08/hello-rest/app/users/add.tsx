import { API_URL } from '@/src/constans/constants';
import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const Adduser = () => {
  const [name, setName] = useState('');
  const handleSave = () => {
    fetch(API_URL + '/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User added:', data);
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };
  return (
    <View>
      <TextInput
        className="border p-4 text-2xl"
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default Adduser;
