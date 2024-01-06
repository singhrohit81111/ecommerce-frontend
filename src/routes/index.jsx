import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from '@pages/Home'
import { Products } from "@pages/Products";
import { Product } from '@pages/Product'
import {Cart} from "@pages/Cart";

export default function RouteHandler() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='products/men' element={<Products category="men"/>} />
                    <Route path='products/women' element={<Products category="woman"/>} />
                    <Route path='products/kids' element={<Products category="kids"/>} />
                    <Route path='product/:id' element={<Product />} />
                    <Route path='cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}