Sure! Here's a complete guide and working code structure for your **Frontend Trainee Evaluation Test** using:

* **Redux Toolkit** for state management
* **dummyjson.com** API for data
* **React + Vite** setup (recommended)
* API: [https://dummyjson.com/docs](https://dummyjson.com/docs)

---

## ✅ Folder Structure (as required):

```
src/
├── components/
│   ├── ProductCard.jsx
│   ├── Header.jsx
│   └── ...
├── pages/
│   ├── Login.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   └── Cart.jsx
├── redux/
│   ├── store.js
│   ├── userSlice.js
│   └── cartSlice.js
├── App.jsx
└── main.jsx
```

---

## 📦 1. Setup Redux Store

### `redux/store.js`

```js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
```

---

### `redux/userSlice.js`

```js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
```

---

### `redux/cartSlice.js`

```js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item) item.quantity += 1;
      else state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => state.filter(p => p.id !== action.payload),
    increaseQty: (state, action) => {
      const item = state.find(p => p.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
```

---

## 🔐 2. Login Page - `pages/Login.jsx`

```jsx
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('kminchelle'); // dummy user
  const [password, setPassword] = useState('0lelplR');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://dummyjson.com/auth/login', {
        username: email,
        password,
      });
      dispatch(setUser({ user: res.data, token: res.data.token }));
      navigate('/products');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
```

---

## 🛍 3. Product Listing - `pages/Products.jsx`

```jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Products = () => {![alt text](image.png)
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res => setProducts(res.data.products));
  }, []);

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <img src={p.thumbnail} alt="" width="100" />
          <h3 onClick={() => navigate(`/product/${p.id}`)}>{p.title}</h3>
          <p>${p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
```

---

## 📦 4. Product Details - `pages/ProductDetails.jsx`

```jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.thumbnail} width="200" alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>⭐ {product.rating}</p>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
```

---

## 🛒 5. Cart Page - `pages/Cart.jsx`

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Qty: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
```

---

## 🧭 6. Routing & Setup

### `App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## ✅ Dummy Credentials

Use these for login:

```json
{
  "username": "kminchelle",
  "password": "0lelplR"
}
```

---

Let me know if you want:

* Tailwind CSS integration
* Protected route setup
* Code splitting for lazy loading
* Full README template for this test

Would you like me to package this in a GitHub-ready zip file or share a GitHub repo structure?
