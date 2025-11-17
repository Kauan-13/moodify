import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Playlist from "./components/Playlist";
import ProfilePage from "./components/ProfilePage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index path="/" element={<HomePage/>}></Route>
                <Route path="/playlist" element={<Playlist/>}></Route>
                <Route path="/profile" element={<ProfilePage/>}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
