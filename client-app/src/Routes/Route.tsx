import { Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import ProductManagement from "../views/Dashboard/ProductManagement";
import UserManagement from "../views/Dashboard/UserManagement";
import Hompage from "../views/Hompage";
import DetailProduct from "../views/Products/Detail";
import ProductsPage from "../views/Products/ProductsPage";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

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