import { Row, Container } from "react-bootstrap";

export function Contact() {
    return (
        <Container>
            <Row>
                <span style={{fontSize: "2em", color: "white"}}>
                    Email:
                </span>
            </Row>
            <Row>
                <span style={{fontSize: "2em", color: "white"}}>
                    Github:
                </span>
            </Row>
        </Container>
    )
}