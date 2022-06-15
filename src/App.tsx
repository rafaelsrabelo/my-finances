import styled from 'styled-components'
import { GlobalStyle } from './global/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
export default function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  )
}


