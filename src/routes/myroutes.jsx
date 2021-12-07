import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../views/home';
import AboutUs from '../views/about';
import Portfolio from '../views/portfolio';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;