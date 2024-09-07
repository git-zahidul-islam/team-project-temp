import AmountRoute from "./banner/AmountRoute";
import Banner from "./banner/Banner";
import CheckoutForm from "./banner/CheckoutForm";
import OrderList from "./banner/OrderList";
import ProductsStock from "./bristy/ProductsStock";
import AddProduct from "./shati/AddProduct";
function App() {
  return(
    <div>
      <Banner/>
      <div className="my-10">
        <CheckoutForm/>
      </div>
      <div className="my-20">
        <OrderList/>
        <h1 className="text-center my-5">Ammount Route</h1>
        <AmountRoute/>
      </div>

      <div className="my-10">
        <AddProduct/>
      </div>

      <div className="my-10">
        <ProductsStock/>
      </div>
    </div>
  )
}

export default App;
