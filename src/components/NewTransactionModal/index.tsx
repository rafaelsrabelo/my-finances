import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import { XSquare } from 'phosphor-react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollarSimple } from 'phosphor-react'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <XSquare size={32} color="#000" weight="duotone" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button"><ArrowCircleUp size={32} color="#53ee5e" weight="duotone" alt="Entrada" /><span>Entrada</span></button>
          <button type="button"><ArrowCircleDown size={32} color="#ee5353" weight="duotone" alt="Saída" /><span>Saída</span></button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}