import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import QuemSomosPage from './pages/QuemSomosPage'
import ProdutosPage from './pages/ProdutosPage'
import ProdutosDetalhesPage from './pages/ProdutosDetalhesPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quem-somos' element={<QuemSomosPage />} />
          <Route path='/produtos' element={<ProdutosPage />} />
          <Route path='/produtos/:codigo' element={<ProdutosDetalhesPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
