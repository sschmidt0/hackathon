import './App.css';
import { Product } from './components/Product';
import { PaymentContainer } from './components/PaymentContainer';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <Product />
      <PaymentContainer />
      <Footer />
    </div>
  );
};
