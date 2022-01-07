import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <Header />
            <div className="not_found_page top_padd">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p>Page Not Found</p>
                            <Link to="/">Goto Home Page</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NotFound;