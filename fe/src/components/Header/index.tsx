import { PawPrint } from '@phosphor-icons/react'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <PawPrint size={60} color='#8d8d99' />
        <h1>Pets Place</h1>
      </div>
    </Container>
  )
}