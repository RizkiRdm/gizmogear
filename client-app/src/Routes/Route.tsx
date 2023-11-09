import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProductManagement from "../pages/Dashboard/ProductManagement";
import UserManagement from "../pages/Dashboard/UserManagement";
import Hompage from "../pages/Hompage";
import DetailProduct from "../pages/Products/Detail";
import ProductsPage from "../pages/Products/ProductsPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const App: React.FC = () => {
    return (
        <Routes>
            {/* homepage route */}
            <Route path="/" element={<Hompage />} />

            {/* products & detail routes */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<DetailProduct />} />

            {/* auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Dashboard routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* CRUD product route */}
            <Route path="/dashboard/product" element={<ProductManagement />} />
            <Route path="/dashboard/product/edit/:slug" element={<ProductManagement />} />

            <Route path="/dashboard/user" element={<UserManagement />} />
        </Routes>
    )
}

export default App