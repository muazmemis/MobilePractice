import { useEffect, useState } from 'react';
import { Text } from 'react-native';

const Home = () => {
  // usss
  const [sayi, setSayi] = useState(42);

  // uffs
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSayi((prev) => prev + 1);
  //     console.log('sayi updated:', sayi);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [sayi]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSayi((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Text className="text-6xl">{sayi}</Text>;
};

export default Home;
