import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
