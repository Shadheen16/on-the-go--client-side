import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import ServiceProvider from './provider/ServiceProvider/ServiceProvider';
import Blog from './pages/Blog/Blog';
import Footer from './pages/Footer/Footer';
import Navbar from './shared/Navbar/Navbar';
import About from './pages/About/About';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import ManageService from './pages/ManageService/ManageService';
import Booking from './pages/Booking/Booking';
import Orders from './pages/Orders/Orders';
import MyOrder from './pages/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ServiceProvider>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services/manage">
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking/>
            </PrivateRoute>
            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute exact path="/orders/byUser">
              <MyOrder>
                
              </MyOrder>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route> 
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </ServiceProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
