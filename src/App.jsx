import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import QuemSomosPage from './pages/QuemSomosPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quem-somos' element={<QuemSomosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
