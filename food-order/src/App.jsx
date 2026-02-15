import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./Store/CartContext";
import Cart from "./components/cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <CheckoutForm />
    </CartContextProvider>
  );
}

export default App;
