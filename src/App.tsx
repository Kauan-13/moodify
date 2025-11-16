import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Playlist from "./components/Playlist";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/moodify" element={<HomePage/>}></Route>
                <Route path="/moodify/playlist" element={<Playlist/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
