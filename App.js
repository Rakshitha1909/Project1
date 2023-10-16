
import { Provider } from 'react-redux';
import './App.css';
import ProductList from './Redux/ProductList';
import ShoppingCart from './Redux/ShoppingCart';
import store from './store';

import Cart from './Redux/ShoppingCart';

function App() {
  return (
    <div className="App">
    

      <Provider store={store}>
      <ProductList />
      <ShoppingCart />
      <Cart />
      </Provider>





    </div>
  );
}

export default App;
