# Expo Router'da Tema (Theme) ve Dark Mode Rehberi

Bu rehber, Expo Router projelerinde **tema yönetimini** ve **dark mode desteğini** nasıl doğru kuracağını anlatır. Ayrıca **Expo SDK 56+** ile gelen önemli bir kuralı da açıklar: `@react-navigation/*` paketlerini doğrudan kurmak yasak — sebebi ve doğru yolu bu dokümanda.

---

## 🐛 Sorun — "Yazı görünmüyor" hikâyesi

Basit bir ekranımız var:

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

- **iOS emülatör (light mode):** "Index" yazısı görünüyor ✅
- **Android emülatör (dark mode):** "Index" yazısı **görünmüyor** ❌

### Neden?

Expo Router alt tarafta React Navigation kullanır ve cihaz temasına göre arka planı otomatik değiştirir:

| Cihaz teması | Arka plan | `<Text>` varsayılan rengi | Sonuç |
| --- | --- | --- | --- |
| Light mode (iOS) | beyaz | siyah | görünür ✅ |
| Dark mode (Android) | siyah | siyah | **görünmez** ❌ |

`<Text>` bileşeninin **default rengi yoktur** ve tema değişince otomatik uyum sağlamaz. Bunu geliştirici yönetmelidir.

---

## ✅ Çözüm Yolları

Üç yaklaşım var. Basitten karmaşığa sıralı:

### 1) `useColorScheme` — Sıfır kurulum, hızlı

`react-native`'in **built-in** hook'u. Ekstra paket gerektirmez.

```tsx
import { Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  const scheme = useColorScheme(); // 'light' | 'dark' | null

  const color = scheme === 'dark' ? 'white' : 'black';
  const backgroundColor = scheme === 'dark' ? 'black' : 'white';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <Text style={{ color }}>Index</Text>
    </SafeAreaView>
  );
};

export default Index;
```

**Ne zaman?** Küçük projeler, hızlı prototipler, sadece dark/light ayrımı yetiyorsa.

---

### 2) Sabit renk paleti + `useColorScheme` — Ölçeklenebilir

Renkleri tek bir yerde yönet:

```tsx
import { Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const lightColors = { background: '#fff', text: '#000' };
const darkColors  = { background: '#000', text: '#fff' };

const Index = () => {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Index</Text>
    </SafeAreaView>
  );
};

export default Index;
```

**Ne zaman?** Uygulaman büyüdükçe renkleri merkezi yönetmek istiyorsan.

---

### 3) `useTheme` (Expo Router'ın) — Navigation ile entegre

Expo Router zaten React Navigation'ın tema sistemini kullanır. Onun renklerini sen de kullanabilirsin — header, tab bar, ekran arka planı hep aynı renkleri paylaşır.

```tsx
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'expo-router';

const Index = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Index</Text>
    </SafeAreaView>
  );
};

export default Index;
```

**Ne zaman?** Navigation header'ı, tab bar, ekran arka planı ve içerik renklerini merkezi tek tema üzerinden yönetmek istiyorsan.

**`colors` içinde neler var?**

```ts
{
  primary: string;      // ana vurgu rengi (link, buton, aktif tab)
  background: string;   // ekran arka planı
  card: string;         // header, tab bar arka planı
  text: string;         // yazı rengi
  border: string;       // çizgi/ayraç rengi
  notification: string; // badge/bildirim rengi
}
```

---

## ⚠️ ÖNEMLİ — SDK 56 Kuralı

### Yapma:

```bash
npm install @react-navigation/native   # ❌ SDK 56'da yasak!
```

Bunu yaparsan build hatası alırsın:

```
As of SDK 56, expo-router...
if (moduleName === '@react-navigation/core')
```

### Neden yasak?

- Expo Router 3+ ve **SDK 56'dan itibaren** `@react-navigation/*` paketleri Expo Router'ın içinde **bundle** ediliyor
- Ayrıca kurunca `node_modules`'da **iki farklı sürüm** oluşuyor
- Expo Router hangisini kullanacağını şaşırıyor → runtime crash'ler, garip navigation hataları
- Expo takımı bu yüzden Metro'ya bir **güvenlik kontrolü** ekledi → build'i durduruyor
- Yani hata **seni koruyor** 🛡️

### Doğrusu:

```tsx
// ❌ YAPMA
import { useTheme } from '@react-navigation/native';

// ✅ YAP
import { useTheme } from 'expo-router';
```

Expo Router, React Navigation'ın önemli tema araçlarını **kendisi re-export ediyor**:

```tsx
import {
  useTheme,        // aktif temayı verir (colors, dark, fonts)
  ThemeProvider,   // tema sağlayıcı (custom tema uygulamak için)
  DarkTheme,       // hazır dark tema objesi
  DefaultTheme,    // hazır light tema objesi
} from 'expo-router';
```

---

## 🎨 Custom Tema Uygulama

Kendi renk paletini React Navigation temasına uydurmak istersen `app/_layout.tsx` içinde:

```tsx
import { ThemeProvider, DefaultTheme, Stack } from 'expo-router';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    background: '#f0f0f0',
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={MyTheme}>
      <Stack />
    </ThemeProvider>
  );
}
```

Artık uygulamadaki tüm `useTheme()` çağrıları bu renkleri döner.

---

## 🧠 Genel Kural

> **Expo Router projelerinde `@react-navigation/*`'dan bir şey ihtiyacın olduğunda, önce `expo-router`'a bak — büyük ihtimalle orada re-export edilmiş.**

### Hızlı referans:

| Hedef | Doğru import kaynağı |
| --- | --- |
| Navigation, router, `router.push()` | `expo-router` |
| Tema (`useTheme`, `DarkTheme`, `DefaultTheme`, `ThemeProvider`) | `expo-router` |
| Screen options, header, `<Stack.Screen>` | `expo-router` |
| Manuel tema algılama (`'light'`/`'dark'`) | `react-native` (`useColorScheme`) |
| Safe area (`SafeAreaView`, `useSafeAreaInsets`) | `react-native-safe-area-context` |
| `@react-navigation/*` doğrudan kurulumu | ❌ **Yapma** |

---

## 🧭 Hangi Çözümü Seçmeliyim?

| Durum | Öneri |
| --- | --- |
| Yeni başlıyorum, tek ekran, hızlı test | **1** — `useColorScheme` |
| Birkaç ekran, renkleri merkezi yönetmek istiyorum | **2** — Sabit palet + `useColorScheme` |
| Navigation header/tab bar renkleri de senkron olsun | **3** — `useTheme` from `expo-router` |
| Custom marka renkleri istiyorum | **3** + `ThemeProvider` ile custom tema |

---

## 🧪 Test Etme

Emülatörde tema değişince doğru davranışı test et:

**iOS Simulator:**
`Features → Toggle Appearance` (⌘+Shift+A)

**Android Emulator:**
`Settings → Display → Dark theme`

Uygulamayı yeniden başlatmadan renkler otomatik değişmeli.

---

## 📌 Özet

1. `<Text>`'in default rengi yoktur → dark mode'da görünmez sorunu yaşarsın
2. Çözüm: **`useColorScheme`** (basit) ya da **`useTheme` from `expo-router`** (entegre)
3. **`@react-navigation/*`'ı asla direkt kurma** — Expo Router zaten yönetiyor
4. İhtiyacın olan hook/component'i önce `expo-router`'da ara
