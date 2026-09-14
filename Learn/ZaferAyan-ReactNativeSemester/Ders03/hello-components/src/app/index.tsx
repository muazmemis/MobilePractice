// rnfe

// Millli piyango bileti üreten buton yazınız.

import { useState } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const [sayilar, setSayilar] = useState<number[]>([]);
  const [kazanc, setKazanc] = useState<number>(0);

  const produceRandomNumber = () => {
    let yeniSayilar: number[] = [];
    const adet = 7;
    const max = 10;
    setSayilar([]); // Önce sayıları temizle
    const amortiler: number[] = [1, 2];

    for (let i = 0; i < adet; i++) {
      const randomNumber = Math.floor(Math.random() * max);
      // state i for döngüsü içinde güncellemek performansı olumsuz etkileyebilir.
      // setSayilar((prevSayilar) => [...prevSayilar, randomNumber]);
      yeniSayilar.push(randomNumber);
    }
    setSayilar(yeniSayilar);

    if (amortiler.includes(yeniSayilar[adet - 1])) {
      console.log('Amorti bulundu:', yeniSayilar[adet - 1]);
      setKazanc(200);
    } else {
      setKazanc(0);
    }
  };
  return (
    <SafeAreaView>
      <Button title="Rastgele Sayı Ekle" onPress={produceRandomNumber}></Button>
      <Text style={{ marginTop: 20, fontSize: 18, textAlign: 'center' }}>{sayilar.join('')}</Text>
      <Text style={{ marginTop: 20, fontSize: 18, textAlign: 'center' }}>Kazanç: {kazanc}</Text>
    </SafeAreaView>
  );
};

export default Index;
