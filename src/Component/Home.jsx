import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../utils/cartSlice";

function Home() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const items = useSelector((store) => store.cart.item) || [];

  const handleAddcart = () => {
    if (!userInput) {
      alert("Please enter a product name");
    } else {
      dispatch(addItem(userInput));
      setUserInput("");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h1 className="text-2xl font-bold text-center mb-4">Add a Product</h1>
        <input
          type="text"
          value={userInput} 
          placeholder="Enter product name"
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex justify-between space-x-4">
          <button
            onClick={handleAddcart}
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
          <button
            onClick={() => dispatch(clearCart())}
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <h2 className="text-lg font-medium text-gray-700 mb-4">
        User Input: <span className="font-bold text-black">{userInput}</span>
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        {items.length > 0 ? (
          items.map((val, i) => (
            <h3
              key={i + 1}
              className="text-lg text-gray-800 bg-blue-100 p-2 rounded-lg mb-2"
            >
              {val}
            </h3>
          ))
        ) : (
          <h3 className="text-lg text-gray-500">Cart is empty</h3>
        )}
      </div>
    </div>
  );
}

export default Home;
