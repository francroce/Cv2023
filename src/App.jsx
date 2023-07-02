import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import ThemeProvider from "./context/ThemeContext"
import Home from "./components/Home"

function App() {

  return (
    <>
    <ThemeProvider>
      <Layout>
        <Navbar/>
        <Home/>
      </Layout>
    </ThemeProvider>
    </>
  )
}

export default App
