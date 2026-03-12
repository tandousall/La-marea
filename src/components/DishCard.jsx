import { useState } from "react";

function DishCard({ dish, addToCart }) {

  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 p-6 rounded-xl">

      <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>

      <p className="text-orange-500 mb-4">{dish.price} CFA</p>

      <div className="flex items-center gap-4 mb-4">

        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          -
        </button>

        <span>{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          +
        </button>

      </div>

      <button
        onClick={() => addToCart(dish, count)}
        className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600"
      >
        Order
      </button>

    </div>
  );
}

export default DishCard;