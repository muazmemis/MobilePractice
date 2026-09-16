import { Link } from 'expo-router';
import { View } from 'react-native';

const Products = () => {
  return (
    <View>
      <Link href="/products/32">Ürün detayına git</Link>
      <Link href="/products/32">Ürün detayına git 2</Link>
      <Link href="/products/muaz/36">Kullanıcı</Link>
    </View>
  );
};

export default Products;
