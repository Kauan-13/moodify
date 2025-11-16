
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import SearchForm from "./components/SearchForm";
import Sidebar from './components/Sidebar'
import Title from "./components/Title";


function App() {
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
  );

}

export default App;
