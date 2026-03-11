import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />
      <Hero />
      <Menu />
      <Contact />

    </div>
  )
}

export default App