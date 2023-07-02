import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import ThemeProvider from "./context/ThemeContext"
import Home from "./components/Home"
import Tecnologias from "./components/Tecnologias"
import Contacto from './components/Contacto'
import Proyectos from "./components/Proyectos"
import Experiencia from "./components/Experiencia"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <ThemeProvider>
      <Layout>
        <Navbar/>
        <Home/>
        <Tecnologias/>
        <Proyectos/>
        <Experiencia/>
        <Contacto/>
        <Footer/>
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default App
