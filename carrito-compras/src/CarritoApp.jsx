import { Navigate, Route, Routes } from "react-router"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"
import { NavBarComponent } from "./components/NavbarComponent"
import { ProductsPage } from "./pages/ProductPage"
import { CartPage } from "./pages/Cart"


export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<ProductsPage />}></Route>
                        <Route path='/carrito' element={<CartPage />} ></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}