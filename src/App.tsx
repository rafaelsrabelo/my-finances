import styled from 'styled-components'

const Title = styled.h1`
  font-size: 44px;
  color: #8257e6;
`

function App() {

  return (
    <div className="App">
      <Title>
        Home
        <button>Salvar</button>
      </Title>
    </div>
  )
}

export default App
