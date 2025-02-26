import * as Styled from '@/styles/home.style'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  const pokeball = require('@/assets/images/pokeball/pokeball.png')

  return (
    <Styled.Container>
      <Styled.Pokeball source={pokeball} />
      <Styled.Title>Pokédex</Styled.Title>
      <Styled.Description>
        Search for Pokémon by name or using the National Pokédex number.
      </Styled.Description>
      <SearchBar
        style={{ marginTop: 25 }}
        placeholder='What Pokémon are you looking for?'
      />
    </Styled.Container>
  )
}
