import React from 'react'
import Contador from './components/Contador'
import ListandoDadosApi from './components/ListandoDadosApi'
import ListaTarefas from './components/ListaTarefas'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'

function App() {
  const[montar, setMontar] = React.useState(true)
  return (
    <>
      {/* Passagem de Props com React */}
      <Header />
      
      <button onClick={() => setMontar(true)}>Montar</button>
      <button onClick={() => setMontar(false)}>Desmontar</button>
      
      {montar ? <ListandoDadosApi /> : null}
      
      <Main />
      <Footer />
    </>
  )
}
export default App
