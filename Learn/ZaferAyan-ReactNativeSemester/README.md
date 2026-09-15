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

npm run reset-project

npm i -g @antfu/ni
brew install ni

curl -fsSL https://bun.sh/install | bash
source ~/.zshrc
# OR use Homebrew to install Bun
brew install oven-sh/bun/bun

bunx rn-new@latest hello-nativewind --expo-router --nativewind
ni nativewind@4.2.1
nr ios
nr android

npm i -g qrcode
qrcode --version
qrcode --help
qrcode "eksik11.com" -t png -o qr.png -l "#FF000000" -d "#FFFF"

ni qrcode
ni --save-dev @types/qrcode
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
