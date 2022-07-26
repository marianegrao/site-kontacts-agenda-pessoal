import Login from './pages/Login';
import RegisterUser from './pages/Register';
import Home from './pages/Home';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import useGivenData from '../src/hooks/useGivenData';

function ProtectedRoutes({ redirectTo }) {
    const {
        token
    } = useGivenData();
    const isAuthenticated = token;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<RegisterUser />} />

            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path="/home" element={<Home />} />
            </Route>

            <Route path='*' element={<h1>404 - Not found</h1>} />
        </Routes>

    );
}