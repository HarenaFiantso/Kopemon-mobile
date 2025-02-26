import { StyleProp, TextInputProps, TextStyle } from 'react-native'
import * as Styled from '@/styles/search-bar.style'

interface Props extends TextInputProps {
  style: StyleProp<TextStyle>
}

export default function SearchBar({ children, style, ...rest }: Props) {
  return (
    <Styled.Container style={style}>
      <Styled.Input {...rest} />
      <Styled.Icon name='search' />
    </Styled.Container>
  )
}
