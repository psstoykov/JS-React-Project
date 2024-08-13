import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import CreatePage from "./components/create-page/CreatePage";
import Details from "./components/details/Details";
import { AuthContextProvider } from "./contexts/authContext";
import EditPage from "./components/edit-page/EditPage";

function App() {
    return (
        <AuthContextProvider>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/details/:gameId" element={<Details />} />
                        <Route path="edit/:gameId" element={<EditPage />} />
                        <Route path="/create" element={<CreatePage />} />
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>
    );
}

export default App;
