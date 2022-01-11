import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

function NotFound() {
    return (
        <>
            <div className="not_found_page top_padd">
                <Container>
                    <Row>
                        <Col>
                            <p>Page Not Found</p>
                            <Link to="/">Goto Home Page</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default NotFound;