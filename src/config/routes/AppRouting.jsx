import { Route, Routes } from 'react-router-dom';
import { Home } from '@pages/AuctionPage/components/Home';
import { AuctionPage } from '@pages/AuctionPage';
import { ProductList } from '@pages/AuctionPage/components/ProductList';
import { JewelryList } from '@pages/AuctionPage/components/ProductList/components/JewelryList/JewelryList';
import { Login } from '@pages/LoginPage';
import { Register } from '@pages/RegisterPage';
import { About } from '@pages/AuctionPage/components/About';
import { PagesNotFound } from '@pages/PagesNotFound/PagesNotFound';

const AppRouting = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route exact path='/' element={<AuctionPage />}>
        <Route path='' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='jewelry' element={<ProductList />}>
          <Route path='' element={<JewelryList />} />
        </Route>
      </Route>
      <Route path='*' element={<PagesNotFound />} />
    </Routes>
  );
};

export default AppRouting;
