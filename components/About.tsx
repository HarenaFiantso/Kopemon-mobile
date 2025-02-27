import * as Styled from '@/styles/about.style'
import getColorFromType from '@/utils/getColorFromType'
import { View } from 'react-native'

const About = ({ pokemonData }: any) => {
  console.log(pokemonData)

  return (
    <Styled.Container>
      <Styled.Description>{pokemonData.description}</Styled.Description>
      <Styled.Title color={getColorFromType(pokemonData.types[0].type.name)}>
        Pokédex Data
      </Styled.Title>
      <Styled.Row>
        <Styled.LeftText>Species</Styled.LeftText>
        <Styled.RightText>{pokemonData.species.name}</Styled.RightText>
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Height</Styled.LeftText>
        <Styled.RightText>{pokemonData.height}m</Styled.RightText>
      </Styled.Row>
      <Styled.Row style={{ marginBottom: 0 }}>
        <Styled.LeftText>Weight</Styled.LeftText>
        <Styled.RightText>{pokemonData.weight}Kg</Styled.RightText>
      </Styled.Row>
      <Styled.Title color={getColorFromType(pokemonData.types[0].type.name)}>
        Training
      </Styled.Title>
      <Styled.Row>
        <Styled.LeftText>Abilities</Styled.LeftText>
        {pokemonData.abilities.map((ability: any, index: number) => (
          <Styled.RightText key={index}>
            {ability.ability.name}
            {'  '}
          </Styled.RightText>
        ))}
      </Styled.Row>
      <Styled.Row>
        <Styled.LeftText>Base Exp</Styled.LeftText>
        <Styled.RightText>{pokemonData.base_experience}</Styled.RightText>
      </Styled.Row>
    </Styled.Container>
  )
}

export default About
