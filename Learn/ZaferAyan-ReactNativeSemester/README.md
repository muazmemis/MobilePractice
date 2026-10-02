# Zafer Ayan React Native

[Eğitim Linki](https://www.youtube.com/watch?v=65m7UvI6qLo&list=PLXwLcWYzZHly8jsPSoy-GOmyP8BRnVZq9)
[Repository](https://github.com/zaferayan/ReactSemester)
[Expo Docs](https://docs.expo.dev/)

```sh
npx create-expo-app@latest hello-expo
cd hello-expo
npm run start
npm run android
npm run ios
npm run web

npx expo run ios -d  # Run the iOS app on a connected device or simulator
# ? Select a device ›
#     iPhone 17 Pro (26.5)
# ❯   iPhone 17 Pro Max (26.5)
#     iPhone 17e (26.5)
#     iPhone Air (26.5)
#     iPhone 17 (26.5)
#     iPad Pro 13-inch (M5) (26.5)
#     iPad Pro 11-inch (M5) (26.5)
#     iPad mini (A17 Pro) (26.5)
#     iPad Air 13-inch (M4) (26.5)
#     iPad Air 11-inch (M4) (26.5)
#     iPad (A16) (26.5)
npx expo run android -d  # Run the Android app on a connected device or emulator


npm run reset-project

npm i -g @antfu/ni
brew install ni

curl -fsSL https://bun.sh/install | bash
source ~/.zshrc
# OR use Homebrew to install Bun
brew install oven-sh/bun/bun

bunx rn-new@latest hello-nativewind --expo-router --nativewind
ni nativewind@4.2.7
ni @tanstack/react-query
# https://react-native-async-storage.github.io/2.0/Usage/
ni @react-native-async-storage/async-storage # bun expo install @react-native-async-storage/async-storage ## expo bunu kullanmayı önermiyor.
ni expo-sqlite # async storage yerine bunu kullan. https://docs.expo.dev/versions/latest/sdk/sqlite/#the-localstorage-api
ni expo-secure-store # token tutmak için SecureStore kullan: https://docs.expo.dev/versions/latest/sdk/securestore/
nr ios
nr android

ni @supabase/supabase-js react-native-url-polyfill
ni @supabase/supabase-js react-native-url-polyfill @react-native-async-storage/async-storage
ni react-hook-form @hookform/resolvers zod

npm i -g qrcode
qrcode --version
qrcode --help
qrcode "eksik11.com" -t png -o qr.png -l "#FF000000" -d "#FFFF"

ni qrcode
ni --save-dev @types/qrcode

ni -D json-server concurrently
```

Dev tools:
android => cmd+m
ios => cmd+d

icon: <https://icons.expo.fyi>

```sh
npx expo install @expo/vector-icons
```

```ts
import Entypo from '@expo/vector-icons/Entypo';
<Entypo name="feather" size={24} color="black" />
```

<https://www.nativewind.dev/>

Aşağıdaki importlar görmezse çalıştır:
**`Cmd+Shift+P` → "TypeScript: Restart TS Server"**

```tsx
import Header from '@/components/Header';
import Notification from '@/components/Notification';
import { notifications as data } from '@/data/data';
```

<https://usehooks.com/>
