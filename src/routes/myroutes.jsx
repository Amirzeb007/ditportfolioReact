import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {
    Home,
    AboutUsPage,
    Portfolio,
    TechnologiesPage,
    InsightsPage,
    CareerPage,
    ContactUsPage,
    MobileAppPage,
    WebDevPage,
    ResWebDesign,
    WordpessDevPage,
    BlockChainDevPage,
    GraphicDesignPage,
    LogoDesignPage,
    WebAndMobilePage,
    UiWireframingPage,
    IdeationElaPage,
    PpcPage,
    SeoPage,
    EMarketingPage,
} from '../views';
import NotFound from '../components/not-found';
import Layout from '../layout';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <>
                        <Route exact path="/services/mobile-app-development" element={<MobileAppPage />} />
                        <Route exact path="/services/website-developemnt" element={<WebDevPage />} />
                        <Route exact path="/services/wordpress-development" element={<WordpessDevPage />} />
                        <Route exact path="/services/responsive-website-design" element={<ResWebDesign />} />
                        <Route exact path="/services/blockchain-development" element={<BlockChainDevPage />} />
                    </>
                    <>
                        <Route exact path="/services/graphic-designing" element={<GraphicDesignPage />} />
                        <Route exact path="/services/logo-designing" element={<LogoDesignPage />} />
                        <Route exact path="/services/web-&-mobile" element={<WebAndMobilePage />} />
                        <Route exact path="/services/ui-wireframing" element={<UiWireframingPage />} />
                        <Route exact path="/services/ideation-elaboration" element={<IdeationElaPage />} />
                    </>
                    <>
                        <Route exact path="/services/ppc" element={<PpcPage />} />
                        <Route exact path="/services/seo" element={<SeoPage />} />
                        <Route exact path="/services/email-marketing" element={<EMarketingPage />} />
                    </>
                    <Route exact path="/technology" element={<TechnologiesPage />} />
                    <Route exact path="/insights" element={<InsightsPage />} />
                    <Route exact path="/about" element={<AboutUsPage />} />
                    <Route exact path="/portfolio" element={<Portfolio />} />
                    <Route exact path="/career" element={<CareerPage />} />
                    <Route exact path="/contact-us" element={<ContactUsPage />} />
                    <Route exact path="/contact-us" element={<ContactUsPage />} />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default MyRoutes;