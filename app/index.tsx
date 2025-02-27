import { StatusBar } from 'expo-status-bar'
import * as Styled from '@/styles/home.style'
import SearchBar from '@/components/SearchBar'
import { useCallback, useEffect, useState } from 'react'
import { ListRenderItemInfo, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import Card from '@/components/Card'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'

const INITIAL_TAKE = 10
const TAKE_ON_SCROLL = 10

export default function Home() {
  const router = useRouter()
  const [take, setTake] = useState(INITIAL_TAKE)
  const [pokemons, setPokemons] = useState<any>([])
  const [pokemonsSearch, setPokemonsSearch] = useState<any>([])
  const pokeball = require('@/assets/images/pokeball/pokeball.png')
  const pokeapiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1304`

  const handleSearch = (query: string) => {
    if (query && pokemons) {
      const matches = pokemons?.filter(
        ({ id, name }: { id: string; name: string }) =>
          id === query || name.includes(query.toLowerCase()),
      )

      if (matches) {
        setPokemonsSearch(matches)
      }
    } else {
      setPokemonsSearch(undefined)
    }
  }

  const handleScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (
        (e.nativeEvent.layoutMeasurement.height +
          e.nativeEvent.contentOffset.y) /
          e.nativeEvent.contentSize.height >=
        0.85
      ) {
        setTake((prev) => prev + TAKE_ON_SCROLL)
      }
    },
    [],
  )

  const renderItem = useCallback((element: ListRenderItemInfo<any>) => {
    const pokemon = element.item as any
    return (
      <Card
        pokemonData={pokemon}
        onPress={() =>
          router.push({
            pathname: '/details',
            params: { pokemon: JSON.stringify(pokemon) },
          })
        }
      />
    )
  }, [])

  useEffect(() => {
    fetch(pokeapiUrl)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
  }, [])
  // TODO: Implement clean infinite scroll:
  //      - Load more Pokémon when scrolling near the bottom (pagination on scroll).
  //      - When the search bar is focused, filter results from all Pokémon, not just the ones already fetched.

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
          data={pokemonsSearch || pokemons?.slice(0, take)}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={33}
          onScroll={handleScroll}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.url}
        />
        <StatusBar style='dark' />
      </Styled.Container>
    </GestureHandlerRootView>
  )
}
