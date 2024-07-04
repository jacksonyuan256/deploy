import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import styles from "./styles.module.css"

function App() {
  return (
    <div className={styles.logo} >
      <Navbar />
        <Container className="mb-4" style={{paddingTop: "30px"}}>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Container>
    </div>
  )
}

export default App
