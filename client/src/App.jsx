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
import EditPage from "./components/edit-page/EditPage";

function App() {
    //context/state functionality

    //TODO remove this from App component
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        //TODO fix by implementing persisted authState
        localStorage.setItem("accessToken", state.accessToken);
        setAuthState(state);
    };

    const contextData = {
        userId: authState._id,
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
                        <Route path="edit/:gameId" element={<EditPage />} />
                        <Route path="/create" element={<CreatePage />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
