import styled from 'styled-components'
import { GlobalStyle } from './global/global'

export default function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <h1>
        Home
        <button>Salvar</button>
      </h1>
    </div>
  )
}


