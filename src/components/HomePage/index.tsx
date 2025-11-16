import { useState } from "react";
import Sidebar from "../Sidebar"
import Title from "../Title";
import SearchForm from "../SearchForm";
import LoginPopup from "../LoginPopup";

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <main>
            <Sidebar onClick={() => setShowPopup(true)} />
            <div className="titleSearch">
                <Title/>
                <SearchForm/>
            </div>

            {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
        </main>
    )
}

export default HomePage;