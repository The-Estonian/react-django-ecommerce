import { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import styles from './App.module.css';
import RootContainer from './components/RootContainer';
import Authentication from "./pages/Authentication"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ProductInfo from "./pages/ProductInfo"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootContainer />}>
        <Route index element={<Home />}/>
        <Route path="/login" element={<Authentication />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product/:id" element={<ProductInfo/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    )
  );
  return (
    <div className={styles['app-container']}>
      <Suspense fallback={<p>Loading ...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
