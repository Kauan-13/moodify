import { useEffect, useState } from "react";
import Sidebar from "../Sidebar"
import Title from "../Title";
import SearchForm from "../SearchForm";
import LoginPopup from "../LoginPopup";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Watermark from "../Watermark";
import FormAlert from "../FormAlert";
import CsatPopup from "../CSATPopup";

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (user !== null && user !== undefined )
            navigate('/profile');

        else setShowPopup(true);
    };

    const [ showCSAT, setShowCSAT ] = useState(true)
    const ID_FUNC = 0

    useEffect(() => {

        const bool = Boolean( localStorage.getItem(`kauan-13.moodify:csat:${ID_FUNC}`) )
        setShowCSAT(!bool)

    }, [])

    const handleSubmit = (e: any, rating: number, id: number) => {
        e.preventDefault()
        console.log({ rating })
        setShowCSAT(false)

        localStorage.setItem(`kauan-13.moodify:csat:${id}`, 'true')
    }
    
    return (
        <main>
            {
                showCSAT &&
                <CsatPopup
                    funcionalidadeNome="'Entrada de Texto'"
                    funcionalidadeId={ ID_FUNC }

                    onClose={ () => setShowCSAT(false) }
                    onSave={ handleSubmit }
                />
            }

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
