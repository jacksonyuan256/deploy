import { Container, Image, Row, Col } from "react-bootstrap"
import Img1 from "../img/bg1.png"
import styles from "../styles.module.css"


export function Home() {
    const desc = "Hello! I am Jackson, a Year _ Computer Science student at NUS"
    return (
        <div>
            <Container fluid className={styles.overall}>
                <Row>
                    <span
                        style={{
                            fontSize: "2em",
                            fontFamily: "sans-serif",
                            color: "white",
                            textDecoration: "underline"
                    }}>
                        INTRODUCTION
                    </span>
                </Row>
                <Row>
                    <Col xs={8} md={6}>
                        <Image src={Img1} thumbnail fluid />
                    </Col>
                </Row>
                <Row>
                    <span
                        style={{
                            fontSize: "2em",
                            fontFamily: "sans-serif",
                            color: "white",
                    }}>
                        {desc}
                    </span>
                </Row>
            </Container>
        </div>
    )
}