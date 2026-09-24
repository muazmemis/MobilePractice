// 1. Tema tipi oluştur
// 2. Context tipi oluştur ve Temayı burada kullan
// 3. Context oluştur ve Context tipini kullan, undefined ata
// 4. Provider oluştur
// 4.1 useState ile tema state'i oluştur. (tema rengi olabilir)
// 4.2 State'i değiştirmek için toggleTheme gibi bir metot yaz.
// 4.3 Dönülecek value'yu oluştur. 2. adımdaki contextType'ı kullan.
// 4.4 <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider> ile sarmala. Value'yu provider'a ver.
// 4.5 Opisyonel: Context çok büyük değilse useTheme hook'u burada oluştur.
// ====
// Kurumsal için şablon
// src/context/theme
//  L ThemeContext.ts
//  L ThemeProvider.tsx
//  L useTheme.ts
//  L types.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface Theme {
  color: string;
  backgroundColor: string;
  borderColor: string;
  fontSize: number;
  borderWidth: number;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => Promise<void>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>({
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    fontSize: 16,
    borderWidth: 1,
  });

  useEffect(() => {
    const restoreTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme) {
          setTheme(JSON.parse(storedTheme));
        }
      } catch (error) {
        console.error('Tema bilgisi geri yüklenemedi:', error);
      }
    };

    restoreTheme();
  }, []);

  const toggleTheme = async () => {
    const nextTheme: Theme = {
      ...theme,
      color: theme.color === 'black' ? 'white' : 'black',
      backgroundColor: theme.backgroundColor === 'white' ? 'black' : 'white',
      borderColor: theme.borderColor === 'black' ? 'white' : 'black',
      borderWidth: theme.borderWidth === 1 ? 4 : 1,
      fontSize: theme.fontSize === 16 ? 28 : 16,
    };

    setTheme(nextTheme);
    try {
      await AsyncStorage.setItem('theme', JSON.stringify(nextTheme));
    } catch (error) {
      console.error('Tema bilgisi kaydedilemedi:', error);
    }
  };

  const value: ThemeContextType = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Hata: ThemeProvider ile sarmalanmadı');
  }
  return context;
}
