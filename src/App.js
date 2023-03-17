import Navbar from './components/MainNavbar/Navbar'
import FixedNavbar from './components/FixedNavbar/FixedNavbar';
import Footer from './components/Footer/Footer';

//PAGES 
import Home from './pages/Home'
import Error from './pages/Error'
import Wiper from './pages/Wiper'
import Pennzoil from './pages/Pennzoil';
import Coolant from './pages/Coolant';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import SearchResult from './pages/SearchResult';
import Login from './components/Login/Login'

//CARROUSEL
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//REDUX
import store from './store/store';
import { Provider } from 'react-redux';

//ROUTER
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Provider store={store}>

      <Navbar />
      <FixedNavbar />
      <Routes>
        <Route path='/laraya' element={<Home />} />
        <Route path='/bosch' element={<Wiper />} />
        <Route path='/pennzoil' element={<Pennzoil />} />
        <Route path='/coolant' element={<Coolant />} />
        <Route path='/prod/:pathID' element={<ProductPage />} />
        <Route path='/searchresult/:searchquery' element={<SearchResult />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
