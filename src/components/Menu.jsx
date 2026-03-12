import { useState } from "react";

/* Dish component OUTSIDE Menu */
function Dish({ id, name, price, image, desc, qty, increase, decrease, addToCart }) {

return (

<div className="bg-zinc-900 rounded-xl overflow-hidden">

<img
src={image}
className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110"
/>

<div className="p-6">

<h3 className="text-xl font-bold">
{name} ({price} FCFA)
</h3>

<p className="text-gray-400 mb-4">{desc}</p>

{/* Counter */}

<div className="flex items-center gap-3 mb-4">

<button
onClick={() => decrease(id)}
className="bg-gray-700 px-3 py-1 rounded"

>

*

</button>

<span className="text-lg font-bold">
{qty[id]}
</span>

<button
onClick={() => increase(id)}
className="bg-gray-700 px-3 py-1 rounded"

>

*

</button>

</div>

{/* Add to Cart */}
<button
onClick={() => addToCart(id,name,price)}
className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded mb-3"

>

Ajouter au panier </button>

</div>
</div>

);
}

/* MAIN MENU */
function Menu() {

const [qty, setQty] = useState({
poulet: 0,
soupeyell: 0,
seafood: 0,
lamb: 0,
atieke: 0,
kandia: 0,
thiere: 0,
yassa: 0,
thieb: 0,
bissap: 0,
jusfruit: 0,
bouye: 0
});

const [cart, setCart] = useState([]);

const increase = (item) => {
setQty(prev => ({
...prev,
[item]: prev[item] + 1
}));
};

const decrease = (item) => {
setQty(prev => ({
...prev,
[item]: Math.max(prev[item] - 1, 0)
}));
};

const addToCart = (id,name,price)=>{

const quantity = qty[id];

if(quantity === 0) return;

const item = {
id,
name,
price,
quantity
};

setCart(prev => [...prev,item]);

};

/* Send order to WhatsApp */
const sendOrder = () => {

let message = "Bonjour je veux commander:%0A";

cart.forEach(item=>{
message += `${item.quantity} ${item.name}%0A`;
});

window.open(
`https://wa.me/221774051057?text=${message}`,
"_blank"
);

};

return (

<section id="menu" className="py-20 bg-black text-white">

<h2 className="text-4xl text-center font-bold text-orange-500 mb-12">
Meilleurs Plats de La Marea
</h2>

<div className="grid md:grid-cols-3 gap-8 px-10">

<Dish id="poulet" name="Poulet rôti" price="8000" image="/pouletroti.jpg" desc="Poulet grillé aux épices." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="soupeyell" name="Soupe Yell" price="5000" image="/soupeyell.jpg" desc="Soupe chaude et réconfortante." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="seafood" name="Sea Food Boil" price="6000" image="/seafood.jpg" desc="Plat de fruits de mer mijoté." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="lamb" name="Lamb Chop" price="5000" image="/dibi.jpg" desc="Dibi yapp Khar." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="atieke" name="Attiéké Poisson" price="4500" image="/atieke.jpg" desc="Attiéké servi avec poisson grillé." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="kandia" name="Soupe Kandia" price="4500" image="/soupekandia.jpg" desc="Riz blanc sauce gombo." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="thiere" name="Thiéré Simé" price="4500" image="/thiere.jpg" desc="Couscous de mil." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="yassa" name="Yassa Poulet" price="4500" image="/yassapoulet.jpg" desc="Poulet sauce caramélisée." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="thieb" name="Thieboudienne" price="3500" image="/tiepdieune.jpg" desc="Riz au poisson." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="bissap" name="Jus Bissap" price="1000" image="/bissap.jpg" desc="Hibiscus." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="jusfruit" name="Jus Fruits Locaux" price="1000" image="/jusdefruit.jpg" desc="Fruits frais." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

<Dish id="bouye" name="Jus Bouye" price="1000" image="/bouye.jpg" desc="Frais et naturel." qty={qty} increase={increase} decrease={decrease} addToCart={addToCart} />

</div>

{/* CART */}

<div id="panier" className="mt-20 px-10">

<h2 className="text-3xl font-bold text-orange-500 mb-6">
Panier
</h2>

{cart.map((item,index)=>(

<div key={index} className="flex justify-between border-b py-2">

<span>
{item.name} x {item.quantity}
</span>

<span>
{item.price * item.quantity} FCFA
</span>

</div>
))}

<button
onClick={sendOrder}
className="mt-6 bg-green-500 px-6 py-3 rounded text-white"

>

Commander sur WhatsApp </button>

</div>


</section>

);
}

export default Menu;

