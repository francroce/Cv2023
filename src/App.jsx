import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import ThemeProvider from "./context/ThemeContext"
import Home from "./components/Home"
import Tecnologias from "./components/Tecnologias"
import Contacto from './components/Contacto'

function App() {

  return (
    <>
    <ThemeProvider>
      <Layout>
        <Navbar/>
        <Home/>
        <Tecnologias/>
        <Contacto/>
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default App
