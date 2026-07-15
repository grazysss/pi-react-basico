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
          cor="white"
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

// Questão 4 — O interruptor (estado com verdadeiro/falso)
// Nas questões anteriores, o estado guardava um número. Mas o estado pode guardar outros tipos de valor
// — nesta questão, ele vai guardar um valor booleano (true ou false), como um interruptor de luz que só

// tem duas posições: ligado ou desligado.
// Crie o componente Interruptor que funciona assim:
// a) Ele possui um estado chamado ligado, que começa com o valor false:
// const [ligado, setLigado] = useState(false);
// b) Na tela, ele exibe um parágrafo com o texto "Desligado" quando o estado for false, e "Ligado"
// quando for true. Você pode usar o operador ternário:
// <p>{ligado ? 'Ligado' : 'Desligado'}</p>
// c) Abaixo do texto, há um botão "Alternar". A cada clique, o estado deve trocar para o valor contrário: se
// estiver false, vira true; se estiver true, vira false. Para isso, use o operador de negação !:
// setLigado(!ligado);
// Resultado esperado: ao clicar no botão repetidamente, o texto na tela alterna entre "Ligado" e "Desligado".
// Note que você não escreveu nenhum código para atualizar a tela — apenas mudou o estado, e o React
// re-renderizou o componente automaticamente. Esse é exatamente o papel do useState.