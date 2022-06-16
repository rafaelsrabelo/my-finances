import { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { GlobalStyle } from './global/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { TransactionsTable } from './components/TransactionsTable'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsContext, TransactionsProvider } from './TransactionsContext'

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={openModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <TransactionsTable />
    </TransactionsProvider>
  )
}


