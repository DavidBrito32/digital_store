import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutPage from '../layouts/Public';

import HomePage from '../pages/Home'
import ErrorPage from '../pages/ErrorPage';
import Products from '../pages/Products';
import Category from '../pages/Category';
import MyOrders from '../pages/MeusPedidos';
import Product from '../pages/Products/Product';
import AuthLayout from '../layouts/Auth';
import LoginPage from '../pages/auth/loginPage';

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LayoutPage />}>
                        <Route index element={<HomePage />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/products/product' element={<Product />} />
                        <Route path='/categorias' element={<Category />} />
                        <Route path='/myorders' element={<MyOrders />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                    <Route path='/auth' element={<AuthLayout />}>
                        <Route index element={<LoginPage />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Ways;