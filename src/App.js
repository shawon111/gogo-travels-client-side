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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateOrder from './Components/UpdateOrder/UpdateOrder';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
          <Switch>
              <Route exact path="/">
                 <Home></Home> 
              </Route>
              <Route exact path="/home">
                 <Home></Home> 
              </Route>
              <Route exact path="/login">
                 <Login></Login> 
              </Route>
              <PrivateRoute exact path="/addpackage">
                 <AddNewPackage></AddNewPackage>
              </PrivateRoute>
              <PrivateRoute exact path="/manageorders">
                 <ManageOrders></ManageOrders>
              </PrivateRoute>
              <PrivateRoute exact path="/myorders">
                 <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute exact path="/updateorder">
                 <UpdateOrder></UpdateOrder>
              </PrivateRoute>
              <PrivateRoute exact path="/packages/placeorder/:Id">
                  <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <Route path="*">
                 <PageNotFound></PageNotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
