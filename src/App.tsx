import { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { GlobalStyle } from './global/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { TransactionsTable } from './components/TransactionsTable'

Modal.setAppElement('#root');

export default function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={openModal} />
      <Dashboard />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2>Cadastrar</h2>
      </Modal>
      <TransactionsTable />
    </>
  )
}


