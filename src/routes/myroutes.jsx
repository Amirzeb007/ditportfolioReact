import React, { Fragment } from 'react';
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
import NotFound from '../views/not-found';
import MobileAppPage from '../views/mobile-dev';
import WebDevPage from '../views/website-dev';
import ResWebDesign from '../views/res-web-design';
import WordpessDevPage from '../views/wordpress-dev';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/services" element={<ServicesPage />} />
                <Fragment>
                    <Route exact path="/services/mobile-app-development" element={<MobileAppPage />} />
                    <Route exact path="/services/website-developemnt" element={<WebDevPage />} />
                    <Route exact path="/services/wordpress-development" element={<WordpessDevPage />} />
                    <Route exact path="/services/responsive-website-design" element={<ResWebDesign />} />
                </Fragment>
                <Route exact path="/technology" element={<TechnologiesPage />} />
                <Route exact path="/insights" element={<InsightsPage />} />
                <Route exact path="/about" element={<AboutUs />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/career" element={<CareerPage />} />
                <Route exact path="/contact-us" element={<ContactUsPage />} />
                <Route exact path="/contact-us" element={<ContactUsPage />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;