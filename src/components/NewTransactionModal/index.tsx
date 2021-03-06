import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { api } from '../../services/api';
import Modal from 'react-modal'
import { XSquare, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })
    setTitle('');
    setAmount(0)
    setCategory('')
    setTitle('deposit')
    onRequestClose();

  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input type="number" placeholder="Valor" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          ><ArrowCircleUp size={32} color="#53ee5e" weight="duotone" alt="Entrada" /><span>Entrada</span></RadioBox>
          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          ><ArrowCircleDown size={32} color="#ee5353" weight="duotone" alt="Saída" /><span>Saída</span></RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}