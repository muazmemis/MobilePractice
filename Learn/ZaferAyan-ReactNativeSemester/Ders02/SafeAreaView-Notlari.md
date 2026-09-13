# SafeAreaView Deprecated — Ne Kullanmalı?

React Native'in kendi `SafeAreaView` bileşeni (`react-native` paketinden gelen) **deprecated** oldu. Yerine [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context) paketindeki `SafeAreaView` bileşeni veya `useSafeAreaInsets` hook'u kullanılmalı.

## Kurulum

Hangi komutu kullanacağın, projeni **nasıl oluşturduğuna** bağlı. İkisini karıştırma!

### 🟢 Expo Projesi ise → `npx expo install`

Eğer projeni şu komutla oluşturduysan:

```bash
npx create-expo-app@latest hello-expo
```

o zaman projen bir **Expo projesi**dir ve şunu kullanmalısın:

```bash
npx expo install react-native-safe-area-context
```

**Neden?** `expo install`, `npm install`'un Expo'ya özel akıllı versiyonudur. Senin kullandığın **Expo SDK sürümüyle uyumlu** paket versiyonunu bulup kurar. `npm install` yaparsan paketin en son sürümü gelir ve Expo SDK ile uyumsuz olup uygulamanı crash edebilir.

> **İpucu:** Expo Router / Expo projelerinde `react-native-safe-area-context` genelde zaten kurulu gelir. Yine de bu komutu çalıştırmak zararsızdır — kurulu değilse kurar, kuruluysa uyumlu sürüme günceller.

---

### 🔵 Saf React Native Projesi ise → `npm install`

Eğer projeni şunlardan biriyle oluşturduysan:

```bash
npx @react-native-community/cli init MyApp
# veya (eski kullanım)
npx react-native init MyApp
```

o zaman projen **saf (bare) React Native projesi**dir ve şunu kullanmalısın:

```bash
npm install react-native-safe-area-context
```

iOS için ek olarak pod kurulumu da gerekir:

```bash
cd ios && pod install && cd ..
```

**Neden?** Saf RN projelerinde Expo SDK yoktur, dolayısıyla `expo install` komutu da yoktur. Paket sürümünü sen yönetirsin.

---

### Özet Tablo

| Projeyi nasıl kurdum? | Proje türü | Kurulum komutu |
| --- | --- | --- |
| `npx create-expo-app@latest ...` | Expo | `npx expo install <paket>` |
| `npx @react-native-community/cli init ...` | Saf RN (Bare) | `npm install <paket>` |
| `npx react-native init ...` (eski) | Saf RN (Bare) | `npm install <paket>` |

> Emin değilsen: `package.json` dosyanı aç, `"expo"` bağımlılığı varsa **Expo projesi**dir.

---

## Kullanım Seçenekleri

### 1) En Basit Değişiklik — `SafeAreaView` Bileşeni

```tsx
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView>
      <Text>Index</Text>
    </SafeAreaView>
  );
};

export default Index;
```

İstersen hangi kenarların safe area'ya saygı göstereceğini seçebilirsin:

```tsx
<SafeAreaView edges={['top', 'bottom']}>
  <Text>Index</Text>
</SafeAreaView>
```

Kullanılabilir `edges` değerleri: `'top' | 'right' | 'bottom' | 'left'`

---

### 2) Daha Esnek — `useSafeAreaInsets` Hook'u

Insets değerlerini elle uygulamak istersen (örneğin sadece `padding` veya `margin` olarak):

```tsx
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Index = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>Index</Text>
    </View>
  );
};

export default Index;
```

---

### 3) Provider (Bir Kere, Root'ta)

Bu paketin çalışması için uygulamanın en tepesinde `SafeAreaProvider` olması gerekir. Expo Router kullanıyorsan `app/_layout.tsx` içinde ekle:

```tsx
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
}
```

> **Not:** Expo Router bazı sürümlerde bu provider'ı otomatik ekliyor olabilir, ancak elle eklemek her zaman güvenli tarafta olmanı sağlar.

---

## Neden Bu Paket?

- ✅ iOS notch / Dynamic Island ve Android status/navigation bar'larını doğru handle eder
- ✅ Native `SafeAreaView`'ın aksine **Android'de de** düzgün çalışır
- ✅ React Navigation ve Expo Router zaten bu paketi bekler
- ✅ React Native ekibi ve Expo resmi olarak bunu tavsiye ediyor
- ✅ `edges` prop'u ile hangi kenarların dikkate alınacağı seçilebilir
- ✅ `useSafeAreaInsets` ile piksel bazında tam kontrol

---

## Özet

| Eski (Deprecated)                       | Yeni (Önerilen)                                   |
| --------------------------------------- | ------------------------------------------------- |
| `import { SafeAreaView } from 'react-native'` | `import { SafeAreaView } from 'react-native-safe-area-context'` |

Kısaca: `react-native`'den import'u sil, `react-native-safe-area-context`'ten al — API neredeyse aynı, ama artık her platformda doğru çalışıyor.
