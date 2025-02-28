import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px 40px;
`

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`

export const Description = styled.Text`
  color: ${(props: any) => props.theme.text};
  font-size: 12px;
  margin-bottom: 10px;
`

export const Title = styled.Text<{ color: string }>`
  margin: 20px 0;
  font-size: 16px;
  font-weight: bold;
  color: ${(props: any) => props.theme.text};
`

export const LeftText = styled.Text`
  color: ${(props: any) => props.theme.text};
  width: 120px;
  font-size: 12px;
  font-weight: bold;
`

export const RightText = styled.Text`
  color: ${(props: any) => props.theme.text};
`
