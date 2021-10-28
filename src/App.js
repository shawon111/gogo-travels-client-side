import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import UpdateOrder from './Components/UpdateOrder/UpdateOrder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
          <Switch>
              <Route exact path="/">
                 <Home></Home> 
              </Route>
              <Route path="/home">
                 <Home></Home> 
              </Route>
              <Route path="/login">
                 <Login></Login> 
              </Route>
              <Route path="/addpackage">
                 <AddNewPackage></AddNewPackage>
              </Route>
              <Route path="/manageorders">
                 <ManageOrders></ManageOrders>
              </Route>
              <Route path="/myorders">
                 <MyOrders></MyOrders>
              </Route>
              <Route path="/updateorder">
                 <UpdateOrder></UpdateOrder>
              </Route>
              <Route path="/placeorder">
                 <PlaceOrder></PlaceOrder>
              </Route>
              <Route path="*">
                 <PageNotFound></PageNotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
