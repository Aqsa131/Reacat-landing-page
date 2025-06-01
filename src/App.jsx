import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import Routing from './pages/Routing';
import CartContextProvider from './context/CartContextProvider';
import Products from './pages/Products';



function App() {
  return (
    <>

      <CartContextProvider>
        <NavBar />
        <Routing />
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
