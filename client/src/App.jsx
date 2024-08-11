import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Catalog from "./components/catalog/Catalog";
import CreatePage from "./components/create-page/CreatePage";
import Details from "./components/details/Details";
import { AuthContext } from "./contexts/userAuth";

function App() {
    //context/state functionality

    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        changeAuthState,
        isAuthenticated: !!authState.email,
    };
    return (
        <AuthContext.Provider value={contextData}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/details/:gameId" element={<Details />} />
                        <Route path="/create" element={<CreatePage />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
