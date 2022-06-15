import { Container } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollarSimple } from 'phosphor-react'


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#53ee5e" weight="duotone" />
        </header>
        <strong>R$ 2.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>
          <ArrowCircleDown size={32} color="#ee5353" weight="duotone" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <CurrencyDollarSimple size={32} color="#ffffff" weight="duotone" />
        </header>
        <strong>R$ 1.500,00</strong>
      </div>
    </Container>
  )
}