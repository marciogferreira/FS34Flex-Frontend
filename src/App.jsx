import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import QuemSomosPage from './pages/QuemSomosPage'
import ProdutosPage from './pages/ProdutosPage'
import ProdutosDetalhesPage from './pages/ProdutosDetalhesPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/Admin/DashboardPage'
import { AuthContext } from './contexts/AuthContext'
import ProductsAdminPage from './pages/Admin/ProductsAdminPage'

function RotaPrivada(props) {
  const { autorizado } = useContext(AuthContext)
  
  if(autorizado === false) {
    return (
      <LoginPage />
    )
  }
  return props.children;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quem-somos' element={<QuemSomosPage />} />
          <Route path='/produtos' element={<ProdutosPage />} />
          <Route path='/produtos/:codigo' element={<ProdutosDetalhesPage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin' element={
            <RotaPrivada>
              <DashboardPage />
            </RotaPrivada>
          } />
           <Route path='/admin/produtos' element={
            <RotaPrivada>
              <ProductsAdminPage />
            </RotaPrivada>
          } />

          <Route path='*' element={<h1>NotFound</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
