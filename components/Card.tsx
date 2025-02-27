import { memo, useEffect, useState } from 'react'
import * as Styled from '@/styles/card.style'
import { Text } from 'react-native'
import TypeCard from './TypeCard'

const Card = ({ pokemonData, onPress }: any) => {
  const [details, setDetails] = useState<any>(null)
  const { url } = pokemonData
  const pokeball = require('@/assets/images/pokeball/pokeball.png')

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error('Failed to fetch Pokémon:', error))
  }, [url])

  if (!details) return <Text>Loading...</Text>

  return (
    <Styled.Container type={details.types[0].type.name} onPress={onPress}>
      <Styled.ID>#{String(details.id).padStart(3, '0')}</Styled.ID>
      <Styled.Name>{details.name}</Styled.Name>
      <Styled.Pokeball source={pokeball} />
      <Styled.Pokemon source={{ uri: details.sprites.front_default }} />
      <Styled.Types>
        {details.types.map((typeObj: any, index: number) => (
          <TypeCard key={index} type={typeObj.type.name} />
        ))}
      </Styled.Types>
    </Styled.Container>
  )
}

export default memo(Card)
