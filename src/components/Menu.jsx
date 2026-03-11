function Menu() {
  return (
    <section id="menu" className="py-20 bg-black text-white">

      <h2 className="text-4xl text-center font-bold text-orange-500 mb-12">
        Meilleurs Plats de La Marea
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {/* Poulet rôti */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/pouletroti.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Poulet rôti (8000 FCFA)</h3>
            <p className="text-gray-400 mb-4">Poulet grillé aux épices.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Poulet%20rôti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Soupe Yell */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/soupeyell.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Soupe Yell (5000 FCFA)</h3>
            <p className="text-gray-400 mb-4">Soupe chaude et réconfortante.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20la%20Soupe%20Yell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Seafood Boil */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/seafood.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Sea Food Boil (6000 FCFA)</h3>
            <p className="text-gray-400 mb-4">Plat de fruits de mer mijoté.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Seafood%20Boil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Lamb Chop */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/dibi.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Lamb Chop (5000 FCFA)</h3>
            <p className="text-gray-400 mb-4">Dibi yapp Khar.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Lamb%20Chop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Attiéké */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/atieke.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Attiéké Poisson (4500 FCFA)</h3>
            <p className="text-gray-400 mb-4">Attiéké servi avec poisson grillé.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20l%27Attieke%20Poisson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Soupe Kandia */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/soupekandia.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Soupe Kandia (4500 FCFA)</h3>
            <p className="text-gray-400 mb-4">Riz blanc, sauce gombo avec fruits de mer.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20la%20Soupe%20Kandia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Thiéré */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/thiere.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Thiéré Simé (4500 FCFA)</h3>
            <p className="text-gray-400 mb-4">Couscous de mil à la sénégalaise.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Thiere%20Sime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Yassa Poulet */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/yassapoulet.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Yassa Poulet (4500 FCFA)</h3>
            <p className="text-gray-400 mb-4">Poulet dans une sauce caramelisée.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Yassa%20Poulet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        {/* Thieboudienne */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/tiepdieune.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Thieboudienne (3500 FCFA)</h3>
            <p className="text-gray-400 mb-4">Riz au poisson.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Thieboudienne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

         <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/bissap.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Jus Bissap (1000 FCFA)</h3>
            <p className="text-gray-400 mb-4">Hibiscus.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Jus%20de%20Fruits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

          <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/jusdefruit.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Jus de Fruits Locaux (1000 FCFA)</h3>
            <p className="text-gray-400 mb-4">Mélange de fruits frais.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Jus%20de%20Fruits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <img src="/bouye.jpg" className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110" />
          <div className="p-6">
            <h3 className="text-xl font-bold">Jus de Bouye (1000 FCFA)</h3>
            <p className="text-gray-400 mb-4">Frais et naturel.</p>
            <a
              href="https://wa.me/221774051057?text=Bonjour%20je%20veux%20commander%20le%20Jus%20de%20Fruits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Menu