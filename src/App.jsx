import { useState } from 'react';
import './App.css';

function App() {

// "backend"
const products = [
  'Camera',
  'Shoes',
  'Handbag',
  'Smartphone',
  'Sweater',
  'Watch',
  'Headphones',
  'Book',
  'Ring'
];

  const [name, setName] = useState('0');
  const [itemsInCart, setItemsInCart] = useState({
    isFilled: false,
    quantity: 0,
  });
  const [addedItems, setAddedItems] = useState([]); // State for added items

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedProduct = e.target.elements.name.value;
    setName(selectedProduct);

    // Update itemsInCart
    setItemsInCart((prevItems) => ({
      isFilled: true,
      quantity: prevItems.quantity + 1,
    }));

    // Add the selected product to the addedItems list
    setAddedItems((prevItems) => [...prevItems, selectedProduct]);
  };

// UI

  return (
    <>
      <header>
        <h1>Shopping Spree</h1>
        <p>{itemsInCart.isFilled ? `You have ${itemsInCart.quantity} item(s) in your cart` : `Add some items`}</p>
        <ul>
          {addedItems.map((item, index) => (
            <li className="printList" key={index}>{item}</li>
          ))}
        </ul>
        
        <form onSubmit={handleSubmit}>
          <select className="productSelect" name="name">
            {products.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </select>
          <button type="submit">Add Product</button>
        </form>
      </header>
    </>
  );
}

export default App;
