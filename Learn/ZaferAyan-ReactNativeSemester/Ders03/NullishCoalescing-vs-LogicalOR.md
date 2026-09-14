# `??` vs `||` — Nullish Coalescing ve Logical OR

React / TypeScript / JavaScript'te sık karşılaşılan iki operatör: **`??`** ve **`||`**. Aynı gibi görünürler ama davranışları farklıdır. Bu rehberde farkı, ne zaman hangisini kullanmayı ve gerçek bir örnek üzerinden nasıl karar vermeyi göreceğiz.

---

## 🔍 Temel Fark

| Operatör | Adı | Sağdakini ne zaman kullanır? |
| --- | --- | --- |
| `\|\|` | Logical OR | Soldaki değer **falsy** ise |
| `??` | Nullish Coalescing | Soldaki değer **sadece `null` veya `undefined`** ise |

**Falsy değerler:** `false`, `0`, `-0`, `''` (boş string), `null`, `undefined`, `NaN`

---

## 📊 Örneklerle Karşılaştırma

```ts
undefined || 'red'  // → 'red'
null      || 'red'  // → 'red'
''        || 'red'  // → 'red'   ⚠️ boş string de yakalanır
0         || 'red'  // → 'red'   ⚠️ 0 da yakalanır
false     || 'red'  // → 'red'   ⚠️ false de yakalanır

undefined ?? 'red'  // → 'red'
null      ?? 'red'  // → 'red'
''        ?? 'red'  // → ''      ← boş string SAKLANIR
0         ?? 'red'  // → 0       ← 0 SAKLANIR
false     ?? 'red'  // → false   ← false SAKLANIR
```

**Özet:** `??` daha "dar" — sadece "değer yok" durumunu yakalar. `||` daha "geniş" — "değer yok VEYA anlamsız" tüm durumları yakalar.

---

## 🎯 Gerçek Örnek — Button bileşeni

Bir button component'imiz var, arka plan rengini prop olarak alıyor:

```tsx
type Props = {
  text: string;
  backgroundColor?: 'dodgerblue' | 'pink' | 'mediumseagreen';
};
```

**İstek:** `backgroundColor` gönderilmezse (veya beklenen değerlerden biri değilse), varsayılan olarak **kırmızı** olsun.

### Deneme 1: `??` ile

```tsx
<View style={{ backgroundColor: backgroundColor ?? 'red' }}>
```

**Sorun:** Bu satır sadece `backgroundColor` **`undefined` veya `null`** olduğunda `'red'` verir. Ama:

```tsx
<Button backgroundColor="" text="..." />
```

çağrısında `''` (boş string) gelir → `??` bunu geçerli sayar → butonun `backgroundColor`'ı `''` olur → **kırmızı gelmez, arka plan kaybolur** (transparan davranış).

### Deneme 2: `||` ile

```tsx
<View style={{ backgroundColor: backgroundColor || 'red' }}>
```

Bu:

- `undefined` gelirse → `'red'` ✅
- `null` gelirse → `'red'` ✅
- `''` gelirse → `'red'` ✅ (boş string de falsy)
- `'dodgerblue'` gelirse → `'dodgerblue'` ✅

**Bu senin niyetine tam uyuyor.** `||` doğru seçim.

---

## 🧠 Karar Kuralı

Şu soruyu sor: **"Bu alanda `''`, `0`, `false` gibi 'falsy ama geçerli' bir değer olabilir mi?"**

- **HAYIR** → `||` kullan (daha az yazı, daha savunmacı)
- **EVET** → `??` kullan (sadece `null`/`undefined`'ı yakalar, diğer falsy değerleri korur)

### Örnekler

| Alan | Falsy geçerli mi? | Öneri |
| --- | --- | --- |
| Renk (`'#fff'`, `'red'`, …) | ❌ `''` renk değil | `\|\|` |
| İsim, başlık | ❌ boş string boş demek | `\|\|` |
| Sayaç (`count`, `page`) | ✅ `0` çok geçerli | `??` |
| Fiyat, indirim | ✅ `0` geçerli | `??` |
| Boolean flag (`isActive`) | ✅ `false` geçerli | `??` |
| API'den gelen opsiyonel ID | ❌ boş string ID değil | `\|\|` |
| Input değeri (kullanıcı yazıyor) | ✅ `''` "henüz boş" demek | `??` |

---

## 💡 Daha Temiz Alternatif — Destructuring Default

Prop'a **default value**'yu doğrudan destructuring'de vermek daha okunabilir:

```tsx
type Props = {
  text: string;
  backgroundColor?: 'dodgerblue' | 'pink' | 'mediumseagreen';
};

const Button = ({ text, backgroundColor = 'red' }: Props) => {
  return (
    <View style={[styles.button, { backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
```

Ama dikkat: **JS'in default parametre kuralı `??` gibi çalışır**, `||` gibi değil.

```ts
const fn = ({ x = 'red' } = {}) => x;
fn({ x: undefined }); // → 'red'  ✅
fn({ x: null });      // → null   ⚠️ null'ı DEFAULT YAPMAZ
fn({ x: '' });        // → ''     ⚠️ boş string kalır
```

Yani destructuring default sadece **`undefined`** durumunda devreye girer.

TypeScript `backgroundColor?: 'dodgerblue' | 'pink' | 'mediumseagreen'` yazınca compile-time'da boş string zaten geçmez. Ama:

- JS runtime'da (test dosyalarında, JS'ten gelen çağrılarda) boş string veya null yine gelebilir
- API veya form state gibi dinamik kaynaklardan da yanlış tip gelebilir

Bu yüzden **savunmacı olmak istiyorsan** `||` iyi bir seçim.

---

## 🛡️ En Güvenli Yaklaşım (Kombine)

Hem destructuring default, hem `||` fallback:

```tsx
const Button = ({ text, backgroundColor = 'red' }: Props) => {
  return (
    <View style={[styles.button, { backgroundColor: backgroundColor || 'red' }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
```

- `undefined` gelirse → destructuring default `'red'` yapar
- `''`, `null` gelirse → `||` yakalar, `'red'` yapar
- Geçerli renk gelirse → o renk kullanılır

Küçük bir tekrar var (`'red'` iki yerde) ama bileşenin **hiçbir durumda renksiz görünmemesi** garanti altına alınır.

---

## 🎯 Senin Örneğin — Final

```tsx
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  text: string;
  backgroundColor?: 'dodgerblue' | 'pink' | 'mediumseagreen';
};

const Button = ({ text, backgroundColor }: Props) => {
  return (
    <View style={[styles.button, { backgroundColor: backgroundColor || 'red' }]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Button;
```

**Neden `||`?**
Renk bir metin (string) — boş string geçerli renk değil. `undefined`, `null`, `''` — hepsi "renk verilmedi" anlamına gelir ve fallback kırmızı olmalı. `||` bu üç durumu da tek satırda yakalar.

---

## 📌 Özet

1. **`??`** → sadece `null` / `undefined` yakalar. `0`, `''`, `false`'u korur.
2. **`||`** → tüm falsy değerleri (`0`, `''`, `false`, `null`, `undefined`) yakalar.
3. **Renk / metin / URL** gibi "boş falsy değeri anlamsız" durumlar → `||` genelde daha güvenli.
4. **Sayı / boolean** gibi "0 veya false geçerli olabilir" durumlar → `??` tek doğru seçim.
5. **Destructuring default** JS'te `??` mantığıyla çalışır — sadece `undefined` yakalar.
6. **Maksimum güvenlik** istiyorsan destructuring default + `||` beraber kullan.

### Basit kural

> **"0, boş string veya false gerçekten anlamlı olabilir mi?"**
> Cevap **evet** ise → `??`
> Cevap **hayır** ise → `||`
