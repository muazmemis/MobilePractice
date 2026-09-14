# `@expo/vector-icons` — Kısa Rehber

Expo projelerinde ikon kullanmak için resmi paket. Feather, Ionicons, Material Icons, FontAwesome ve daha fazlasını tek pakette sunar.

---

## 🐛 Sık Karşılaşılan Hata

```
Unable to resolve module @expo/vector-icons/Feather
@expo/vector-icons could not be found within the project or in these directories:
  node_modules
```

**Sebep:** Paket kurulu değil. Eskiden `expo` paketiyle otomatik geliyordu, **SDK 56/57'den itibaren ayrı kurman gerekiyor.**

---

## ✅ Kurulum

```bash
npx expo install @expo/vector-icons
```

Sonra Metro cache temizle:

```bash
npx expo start -c
```

> **Neden `npm install` değil?** Expo projesindesin — `expo install` senin SDK sürümüne uyumlu paket versiyonunu kurar. `npm install` en son sürümü çeker ve SDK ile uyumsuz olup crash edebilir.

---

## 📖 Kullanım

### 1) Tek ikon seti import etme (bundle daha küçük)

```tsx
import Feather from '@expo/vector-icons/Feather';

<Feather name="mail" size={24} color="black" />
```

### 2) Birden fazla ikon seti

```tsx
import { Feather, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

<Feather name="user" size={24} color="black" />
<Ionicons name="heart" size={24} color="red" />
<MaterialIcons name="settings" size={24} color="gray" />
<FontAwesome name="github" size={24} color="#333" />
```

---

## 🎨 Props

| Prop | Tip | Açıklama |
| --- | --- | --- |
| `name` | string | İkonun adı (TypeScript autocomplete yapar) |
| `size` | number | İkonun piksel boyutu |
| `color` | string | İkonun rengi (`'red'`, `'#fff'`, `'rgb(...)'`) |
| `style` | ViewStyle | Ek stil (margin, transform vb.) |

Örnek:

```tsx
<Feather
  name="search"
  size={20}
  color="gray"
  style={{ marginRight: 8 }}
/>
```

---

## 🔍 İkon Adını Bulma — icons.expo.fyi

En pratik yol: **https://icons.expo.fyi/**

- Arama kutusuna ikon adını yaz (`user`, `heart`, `menu`…)
- Hangi set'lerde olduğunu görürsün
- Tıklayınca doğru `import` satırını ve `<Icon />` kodunu **kopyala-yapıştır** verir

---

## 📦 Popüler İkon Setleri

| Set | Ne için ideal? | Örnek adı |
| --- | --- | --- |
| `Feather` | Minimal, çizgi ikonlar | `mail`, `user`, `menu` |
| `Ionicons` | iOS tarzı, dolu + çizgi çeşitleri | `heart`, `heart-outline` |
| `MaterialIcons` | Android/Material Design | `settings`, `home` |
| `MaterialCommunityIcons` | Material'ın genişletilmiş versiyonu | `bell`, `account-circle` |
| `FontAwesome` / `FontAwesome5` / `FontAwesome6` | Brand logoları için popüler | `github`, `twitter` |
| `AntDesign` | Alibaba tasarım dili | `search`, `close` |
| `Entypo` | Ekstra çeşitlilik | `chevron-right`, `dot-single` |

---

## 💡 İpuçları

### Input alanı içinde ikon kullanmak

```tsx
import { View, TextInput } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

<View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 8, borderRadius: 8 }}>
  <Feather name="mail" size={20} color="gray" style={{ marginRight: 8 }} />
  <TextInput placeholder="E-posta" style={{ flex: 1 }} />
</View>
```

### Buton içinde ikon + metin

```tsx
import { Pressable, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

<Pressable style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
  <Feather name="log-in" size={18} color="white" />
  <Text style={{ color: 'white' }}>Giriş Yap</Text>
</Pressable>
```

### Dinamik ikon adı (TypeScript ile)

```tsx
import Feather from '@expo/vector-icons/Feather';

type IconName = React.ComponentProps<typeof Feather>['name'];

const iconName: IconName = 'user';
<Feather name={iconName} size={24} />
```

Bu tip yardımı ile geçersiz bir ikon adı yazarsan TypeScript sana hata verir.

---

## 📌 Özet

1. **Kurulum:** `npx expo install @expo/vector-icons`
2. **Import:** `import Feather from '@expo/vector-icons/Feather'`
3. **Kullanım:** `<Feather name="mail" size={24} color="black" />`
4. **İkon bulma:** https://icons.expo.fyi/
5. **Autocomplete:** TypeScript `name` prop'unda tüm geçerli isimleri gösterir 👍
