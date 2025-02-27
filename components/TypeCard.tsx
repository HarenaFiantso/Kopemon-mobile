import React from 'react'
import * as Styled from '@/styles/type-card.style'

const TypeCard = ({ type }: any) => {
  return (
    <Styled.Container>
      <Styled.Type>{type}</Styled.Type>
    </Styled.Container>
  )
}
export default TypeCard
