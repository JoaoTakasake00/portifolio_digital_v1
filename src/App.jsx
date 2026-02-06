import React from 'react'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Navbar from './components/navbar'
import Topicos from './pages/topicos'
import Projetos from './pages/projetos'
import Contato from './pages/contato'
import Footer from './pages/footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Topicos />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}

export default App
