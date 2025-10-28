import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import SearchForm from "./components/SearchForm";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main>
      <SearchForm/>

      {/* BOTÃO ILUSTRATIVO */}
      <button onClick={() => setShowPopup(true)}>login</button>
      {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
    </main>
  );
}

export default App;
