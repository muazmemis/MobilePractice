import { FontAwesome6, Octicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Transaction = {
  id: string;
  brand: 'youtube' | 'stripe' | 'google-play';
  detail: string;
  date: string;
  price: number;
  isRenevue: boolean;
};

const Home = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      brand: 'youtube',
      detail: 'Sample detail',
      date: '2024-06-05',
      price: 100,
      isRenevue: true,
    },
    {
      id: '2',
      brand: 'stripe',
      detail: 'Sample detail',
      date: '2024-06-05',
      price: 200,
      isRenevue: false,
    },
    {
      id: '3',
      brand: 'google-play',
      detail: 'Sample detail',
      date: '2024-06-05',
      price: 300,
      isRenevue: true,
    },
  ]);

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View className="absolute w-full h-64 bg-purple-950">
        <View>
          <Text>Hello</Text>
        </View>
      </View>
      <SafeAreaView className="p-8 ">
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            {/* Image */}
            <View className="w-12 h-12 bg-gray-400 rounded-full "></View>
            {/* TextContainer */}
            <View className="">
              <Text className="text-xl font-semibold text-white">Hello Muaz</Text>
              <Text className="text-base text-gray-300">Welcome back</Text>
            </View>
          </View>
          {/* BellIcon */}
          <View className="">
            <Octicons name="bell" size={24} color="white" />
          </View>
        </View>

        {/* Card */}
        <View className="gap-3 p-4 mt-8 bg-white shadow rounded-xl">
          {/* Your Balance */}
          <Text className="text-gray-500">Your Balance</Text>
          {/* $0.00 eyeicon */}
          <View className="flex-row items-center gap-4 ">
            <Text className="text-4xl font-semibold text-gray-900">
              <Text className="text-2xl ">$</Text>
              <Text className="text-3xl font-semibold text-gray-900">41,379.00</Text>
            </Text>
            <Octicons name="eye" size={24} color="gray" />
          </View>

          {/* transfer, withdraw, invest, top up */}
          <View className="flex-row justify-around mt-4">
            {/* transfer */}
            <View className="items-center self-center gap-1">
              <View className="p-4 rounded-full bg-purple-950">
                <Octicons name="arrow-up" size={24} color="white" />
              </View>
              <Text>Transfer</Text>
            </View>
            {/* withdraw */}
            <View className="items-center self-center gap-1">
              <View className="p-4 rounded-full bg-purple-950">
                <Octicons name="arrow-down" size={24} color="white" />
              </View>
              <Text>Withdraw</Text>
            </View>
            {/* invest */}
            <View className="items-center self-center gap-1">
              <View className="p-4 rounded-full bg-purple-950">
                <Octicons name="graph" size={24} color="white" />
              </View>
              <Text>Invest</Text>
            </View>
            {/* top up */}
            <View className="items-center self-center gap-1">
              <View className="p-4 rounded-full bg-purple-950">
                <Octicons name="plus" size={24} color="white" />
              </View>
              <Text>Top Up</Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}

        <FlatList
          data={transactions}
          keyExtractor={(item, index) => index.toString()}
          className="mt-4"
          ItemSeparatorComponent={() => <View className="w-full h-2" />}
          renderItem={({ item: { id, brand, price, date, detail, isRenevue } }) => (
            <View className="flex-row justify-between p-4 bg-white">
              <View className="flex-row items-center gap-4">
                {/* Icon */}
                <View className="p-3 bg-gray-200 rounded-full">
                  <FontAwesome6 name={brand} size={24} color="black" />
                </View>
                {/* Text Container */}
                <View>
                  <Text className="text-base font-semibold text-gray-500">{brand}</Text>
                  <Text className="text-gray-500 text-smfont-semibold">{detail}</Text>
                </View>
                <View></View>
              </View>
              {/* Price Container */}
              <View>
                <Text className="text-lg font-bold text-gray-900">
                  {isRenevue ? `+ $${price}` : `- $${price}`}
                </Text>
                <Text className="text-sm text-gray-400">{date}</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
