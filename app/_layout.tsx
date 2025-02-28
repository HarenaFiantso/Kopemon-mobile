import { DarkTheme, LightTheme } from '@/constants/theme'
import { ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { Appearance } from 'react-native'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : LightTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  )
}
