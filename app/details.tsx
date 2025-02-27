import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import * as Styled from '@/styles/details.style'
import { useNavigation } from '@react-navigation/native'
import BackButton from '@/components/BackButton'
import TypeCard from '@/components/TypeCard'

export default function Details() {
  const [details, setDetails] = useState<any>(null)
  const params = useLocalSearchParams()
  const navigation = useNavigation();
  const { url } = JSON.parse(params.pokemon as string)
  const pokeball = require('@/assets/images/pokeball/pokeball.png')

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error('Failed to fetch Pokémon:', error))
  }, [url])

  if (!details) return <Text>Loading...</Text>

  return (
    <Styled.Container type={details.types[0].type.name}>
      <Styled.Navbar>
        <BackButton onPress={navigation.goBack} />
      </Styled.Navbar>
      <Styled.Header>
        <Styled.ID>#{String(details.id).padStart(3, '0')}</Styled.ID>
        <Styled.Name>{details.name}</Styled.Name>
        <Styled.Types>
          {details.types.map((typeObj: any, index: number) => (
            <TypeCard key={index} type={typeObj.type.name} />
          ))}
        </Styled.Types>
        <Styled.Pokeball source={pokeball} />
        <Styled.Pokemon source={{ uri: details.sprites.front_default }} />
      </Styled.Header>
    </Styled.Container>
  )
}
