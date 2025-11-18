import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Playlist from "./components/Playlist";
import ProfilePage from "./components/ProfilePage";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <HashRouter>
                <Routes>
                    <Route index path="/" element={<HomePage/>}></Route>
                    <Route path="/playlist" element={<Playlist/>}></Route>
                    <Route path="/profile" element={<ProfilePage/>}></Route>
                </Routes>
            </HashRouter>
        </AuthProvider>
    );
}

export default App;
