function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-10 py-5 bg-black/70 backdrop-blur">

      <h1 className="text-2xl font-bold text-orange-500">
        La Marea by A.S
      </h1>

      <div className="space-x-6">
        <a href="#menu" className="hover:text-orange-500">Menu</a>
        <a href="#contact" className="hover:text-orange-500">Contact</a>
      </div>

    </nav>
  )
}

export default Navbar