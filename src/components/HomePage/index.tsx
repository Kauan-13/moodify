import { useState } from "react";
import Sidebar from "../Sidebar"
import Title from "../Title";
import SearchForm from "../SearchForm";
import LoginPopup from "../LoginPopup";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Watermark from "../Watermark";
import FormAlert from "../FormAlert";

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (user !== null && user !== undefined )
            navigate('/profile');

        else setShowPopup(true);
    };

    return (
        <main>
            <Sidebar onClick={handleProfileClick} />
            
            <div className="titleSearch">
                <Title/>
                <SearchForm/>
            </div>

            {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
            <Watermark/>
            <FormAlert/>
        </main>
    )
}

export default HomePage;
