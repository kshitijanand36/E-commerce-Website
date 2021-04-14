import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

var currYear = new Date().getFullYear();
const Footer = () => {
    return (
        <footer>
            <Container>

                <Row>

                    <Col className="text-center py-3">
                        Copyright &copy; Proshop {currYear}

                    </Col>

                </Row>

            </Container>
        </footer>
    )
}

export default Footer
