import { useState } from "react";
import { Money } from "phosphor-react"
import { Container, Content, Logo } from "./styles"
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <Logo>
          <Money size={48} color="#0f9b18" weight="duotone" />
          <a href="/">MYFINANCE</a>
        </Logo>
        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}