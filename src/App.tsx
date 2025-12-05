import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Playlist from "./components/Playlist";
import ProfilePage from "./components/ProfilePage";
import { AuthProvider } from "./contexts/AuthContext";
import { PlaylistProvider } from "./contexts/PlaylistContext";
import { Toaster } from "sonner";
import DashboardPage from "./components/DashboardPage";

function App() {
    return (
        <AuthProvider>
            <PlaylistProvider>
                <HashRouter>
                    <Routes>
                        <Route index path="/" element={<HomePage/>}></Route>
                        <Route path="/playlist/:id" element={<Playlist/>}></Route>
                        <Route path="/profile" element={<ProfilePage/>}></Route>
                        <Route path="/csat" element={<DashboardPage/>}></Route>
                    </Routes>
                    <Toaster richColors closeButton position="top-right" theme='light' />
                </HashRouter>
            </PlaylistProvider>
        </AuthProvider>
    );
}

export default App;
