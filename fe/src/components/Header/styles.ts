import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme['gray-800']};
  height: 125px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-style: italic;
      font-weight: normal;
      color: ${({ theme }) => theme['gray-300']};
      font-family: 'Roboto';
      font-size: 1.5rem;
    }
  }
`