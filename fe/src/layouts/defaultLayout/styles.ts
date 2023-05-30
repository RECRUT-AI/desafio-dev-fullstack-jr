import styled from 'styled-components'

export const LayoutContainer = styled.div`
  height: calc(100vh - 10rem);
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-900']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`