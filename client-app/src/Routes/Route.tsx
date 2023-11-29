import { Navigate, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInState, roleState } from "../Recoil/atom";
import Dashboard from "../pages/Dashboard";
import UserManagement from "../pages/Dashboard/UserManagement";
import Hompage from "../pages/Hompage";
import DetailProduct from "../pages/Products/Detail";
import ProductsPage from "../pages/Products/ProductsPage";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const App: React.FC = () => {
    const isLogin = useRecoilValue(isLoggedInState)
    const isAdmin = useRecoilValue(roleState)

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
            <Route
                path="/dashboard/*"
                element={
                    isLogin && isAdmin === 'admin' ? (
                        <>
                            <Dashboard />
                            <Routes>
                                <Route path="product/edit/:slug" element={<Dashboard />} />
                                <Route path="user" element={<UserManagement />} />
                            </Routes>
                        </>
                    ) : (
                        <Navigate to="/" />
                    )
                }
            />
        </Routes>
    )
}

export default App