import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/cart";
import { CartContextProvider } from "./Store/CartContext";
import { UserProgressContextProvider } from "./Store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
