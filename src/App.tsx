
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import SearchForm from "./components/SearchForm";
import Sidebar from './components/Sidebar'
function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main>
      <Sidebar onClick={() => setShowPopup(true)} />
      <SearchForm/>
      {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />}
    </main>
  );

}

export default App;
