import { Money } from "phosphor-react"
import { Container, Content, Logo } from "./styles"

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <Money size={48} color="#0f9b18" weight="duotone" />
          <a href="/">MYFINANCE</a>
        </Logo>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  )
}