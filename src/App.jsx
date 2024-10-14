import AmountRoute from "./banner/AmountRoute";
import Banner from "./banner/Banner";
import BannerPost from "./banner/BannerPost";
import CheckoutAndPaymentForm from "./banner/CheckoutAndPaymentForm";
import CheckoutForm from "./banner/CheckoutForm";
import Dashboard from "./banner/Dashboard";
import OrderList from "./banner/OrderList";
import Payment from "./banner/Payment";
import ProductsStock from "./bristy/ProductsStock";
import ProjectShow from "./components/navBar/ProjectShow";
import AddProduct from "./shati/AddProduct";
import JsBanner from "./shati/JsBanner";

function App() {
  return(
    <div>
      <Banner/>

      {/* <div className="my-10">
          <ProjectShow/>
      </div> */}

      <BannerPost/>

      <JsBanner/>

      <div className="my-10">
        {/* <CheckoutForm/> */}
        {/* <CheckoutAndPaymentForm/> */}
      </div>

      <div className="my-10">
        {/* <Payment/> */}
      </div>

      {/* <div className="my-20">
        <OrderList/>
        <h1 className="text-center my-5">Ammount Route</h1>
        <AmountRoute/>
      </div> */}

      {/* <div className="my-10">
        <AddProduct/>
      </div>

      <div className="my-10">
        <ProductsStock/>
      </div> */}

      {/* <Dashboard/> */}

      {/* <ServiceOverview/> */}
    </div>
  )
}

export default App;
