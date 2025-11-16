import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Playlist from "./components/Playlist";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index path="/" element={<HomePage/>}></Route>
                <Route path="/playlist" element={<Playlist/>}></Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
