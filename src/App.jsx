import { useState } from 'react'
import './App.css'
import Saudacao from './components/Saudacao'
import Perfil from './components/Perfil'
import Contador from './components/Contador'
import Botao from './components/Botao'
import Interruptor from './components/Interruptor'

function App() {
  const [contador, setContador] = useState(0)

  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }

  function reset() {
    setContador(0)
  }

  const [ligado, setLigado] = useState(false)

  function alternar() {
    setLigado(!ligado)
  }

  return (
    <div 
    style={{
        margin: '64px auto'
    }}>
      <p>Ex1&2: Components e Props</p>
      <Saudacao />
      <Perfil nome="mundo" />
      <Perfil nome="Jefferson" />

    <div
    style={{
        margin: '64px auto'
    }}>
      <p>Ex3: Contador</p>
      <Contador n={contador} />
      <div style={{
        display: 'flex',
        gap: '12px',
        justifyContent: 'center'
      }}>
        <Botao 
          text="+" 
          cor="green" 
          onClick={incrementar} 
          />
        <Botao
          text=""
          cor="yellow"
          onClick={reset}
          />
        <Botao
          text="-"
          cor="red"
          onClick={decrementar}
          />
      </div>

      <div
      style={{
        margin: '64px auto'
      }}>
        <p>Ex4: Interruptor (boolean)</p>
        <Interruptor state={ligado}/>
        <Botao
          text="~"
          cor="blue"
          onClick={alternar}
        />
      </div>
    </div>
    </div>
  )
}

export default App