function Navbar() {
return ( <nav className="flex justify-between items-center bg-black text-white px-10 py-4">


  <h1 className="text-orange-500 text-xl font-bold">
    La Marea
  </h1>

  <div className="flex gap-8 text-lg">

    <a
      href="#menu"
      className="hover:text-orange-400 transition"
    >
      Menu
    </a>

    <a
      href="#panier"
      className="hover:text-orange-400 transition"
    >
      Panier
    </a>

    <a
      href="#contact"
      className="hover:text-orange-400 transition"
    >
      Contact
    </a>

  </div>

</nav>


);
}

export default Navbar;
