import "./App.css";
import Badges from "./Bagdes/Badges";
import Outcome from "./Outcome/Outcome";
import DashBoard from "./DashBoard/DashBoard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Badges />} />
                <Route path="/outcome/:id" element={<Outcome />} />
                <Route path="/dash/:id" element={<DashBoard />} />
            </Routes>
        </Router>
    );
}

export default App;
