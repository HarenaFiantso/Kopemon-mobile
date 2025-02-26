import { StatusBar } from 'expo-status-bar'
import * as Styled from '@/styles/home.style'
import SearchBar from '@/components/SearchBar'
import { useCallback, useEffect, useState } from 'react'
import { ListRenderItemInfo, Text } from 'react-native'
import Card from '@/components/Card'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Home() {
  const [pokemons, setPokemons] = useState<any>([])
  const pokeball = require('@/assets/images/pokeball/pokeball.png')
  const handleSearch = (query: string) => {
    console.log(query)
  }

  const renderItem = useCallback((element: ListRenderItemInfo<any>) => {    
    const pokemon = element.item as any
    return <Card pokemonData={pokemon} />
  }, [])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))

    fetch
  }, [])

  return (
    <GestureHandlerRootView>
      <Styled.Container>
        <Styled.Pokeball source={pokeball} />
        <Styled.Title>Pokédex</Styled.Title>
        <Styled.Description>
          Search for Pokémon by name or using the National Pokédex number.
        </Styled.Description>
        <SearchBar
          style={{ marginTop: 25 }}
          placeholder='What Pokémon are you looking for?'
          onChangeText={handleSearch}
        />
        <Styled.List
          data={pokemons?.slice(0, 10)}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={33}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.url}
        />
        <StatusBar style='dark' />
      </Styled.Container>
    </GestureHandlerRootView>
  )
}
