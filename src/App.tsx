import { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { GlobalStyle } from './global/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { TransactionsTable } from './components/TransactionsTable'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsContext } from './TransactionsContext'

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
    <TransactionsContext.Provider value={[]}>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={openModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <TransactionsTable />
    </TransactionsContext.Provider>
  )
}


