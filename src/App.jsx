import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import ThemeProvider from "./context/ThemeContext"
import Home from "./components/Home"
import Tecnologias from "./components/Tecnologias"

function App() {

  return (
    <>
    <ThemeProvider>
      <Layout>
        <Navbar/>
        <Home/>
        <Tecnologias/>
        <Home/>
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default App
