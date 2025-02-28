import { darkTheme, lightTheme } from '@/theme/theme'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'
import * as ScreenOrientation from 'expo-screen-orientation'
import { useEffect } from 'react'

export default function RootLayout() {
  const scheme = useColorScheme()

  useEffect(() => {
    const unlockScreenOerientation = async () => {
      await ScreenOrientation.unlockAsync()
    }
    unlockScreenOerientation()
  }, [])

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  )
}
