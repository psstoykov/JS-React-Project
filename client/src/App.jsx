import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import CreatePage from "./components/create-page/CreatePage";
import Details from "./components/details/Details";
import EditPage from "./components/edit-page/EditPage";
import Logout from "./components/logout/Logout";
import RouteGuard from "./components/route-guard/RouteGuard";

function App() {
    return (
        <AuthContextProvider>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* TODO make a guard when logged in to go to home when trying to login or register */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/details/:gameId" element={<Details />} />
                        {/* Route guard */}
                        <Route element={<RouteGuard />}>
                            <Route path="/create" element={<CreatePage />} />
                            <Route path="edit/:gameId" element={<EditPage />} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>
    );
}

export default App;
