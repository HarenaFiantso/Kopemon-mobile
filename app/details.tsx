import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function Details() {
  const params = useLocalSearchParams()
  const { name, url } = JSON.parse(params.pokemon as string)

  return (
    <View>
      <Text>{name}</Text>
      <Text>{url}</Text>
    </View>
  )
}
