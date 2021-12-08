import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../views/home';
import AboutUs from '../views/about';
import Portfolio from '../views/portfolio';
import TechnologiesPage from '../views/technology';
import ServicesPage from '../views/services';
import InsightsPage from '../views/insights';
import CareerPage from '../views/career';
import ContactUsPage from '../views/contact-us';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/services" element={<ServicesPage />} />
                <Route exact path="/technology" element={<TechnologiesPage />} />
                <Route exact path="/insights" element={<InsightsPage />} />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/career" element={<CareerPage />} />
                <Route exact path="/contact-us" element={<ContactUsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;