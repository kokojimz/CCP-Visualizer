import React from 'react'
import "./index.css";
import Landingpage from './Components/LandingpageComponent/Landingpage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Coinchange from './Components/CoinchangeComponent/Coinchange';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landingpage />}></Route>
                <Route path="/Coinchange" element={<Coinchange />}></Route>
            </Routes>
        </Router>
    )
}

export default App