import { darkTheme, lightTheme } from '@/theme/theme'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'

export default function RootLayout() {
  const scheme = useColorScheme()
  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  )
}
