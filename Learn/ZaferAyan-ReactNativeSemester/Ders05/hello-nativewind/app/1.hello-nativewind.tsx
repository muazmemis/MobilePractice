import { Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  return (
    <View>
      <TouchableOpacity className="m-4 rounded-xl bg-blue-500 p-4">
        <Text className="text-center text-sm text-white">Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity className="m-4 rounded-xl bg-red-500 p-4">
        <Text className="text-center text-sm text-white">Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity className="m-4 rounded-xl bg-green-500 p-4">
        <Text className="text-center text-sm text-white">Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity className="m-[1rem] rounded-xl bg-gray-500 p-4">
        <Text className="text-center text-sm text-white">Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity className="m-[16px] rounded-xl bg-black p-4">
        <Text className="text-center text-sm font-bold text-white">Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
