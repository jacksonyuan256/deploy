import { Container, Image, Row, Col } from "react-bootstrap"
import Img1 from "../img/bg1.png"
import styles from "../styles.module.css"


export function Home() {
    const desc = "Hello! I am Jackson, a Year 3 Computer Science student at NUS"
    return (
        <div>
            <Container fluid className={styles.overall}>
                <Row style={{ marginBottom: "10px" }}>
                    <span
                        style={{
                            fontSize: "2em",
                            fontFamily: "sans-serif",
                            color: "white",
                            textDecoration: "underline",
                            textAlign: "center"
                    }}>
                        INTRODUCTION
                    </span>
                </Row>
                <Row style={{ marginBottom: "10px", paddingLeft: "33.5%"}}>
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
                            paddingBottom: "100px",
                            textAlign: "center"
                    }}>
                        {desc}
                    </span>
                </Row>
                <Row>
                    <span
                        style={{
                            fontSize: "2em",
                            fontFamily: "sans-serif",
                            color: "white",
                            paddingBottom: "20px",
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textAlign: "center"
                    }}>
                        INTERESTS & HOBBIES
                    </span>
                </Row>
                <Row>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" style={{fill:"#FFFFFF"}}>
                        <path d="M22.07,21.034l-1.42-1.42c-1.83-1.83-2.99-4.19-3.36-6.72h2.04v-2.16l-2.15-1.08h-0.01v-0.58c1.3-0.75,2.16-2.14,2.16-3.74 c0-2.39-1.93-4.32-4.32-4.32s-4.32,1.93-4.32,4.32c0,1.6,0.86,2.99,2.16,3.74v0.58l-2.16,1.08v2.16h2.04 c-0.37,2.53-1.53,4.89-3.36,6.72l-1.42,1.42c-1.01,1.01-1.58,2.38-1.58,3.81v2.09c5.5,1.47,11.25,1.48,17.28,0v-2.09 C23.65,23.414,23.08,22.044,22.07,21.034z M14.14,4.134c-0.83,0.83-1.84,1.17-2.25,0.76c-0.42-0.42-0.08-1.43,0.75-2.26 c0.82-0.82,1.83-1.16,2.25-0.74C15.3,2.304,14.96,3.314,14.14,4.134z"></path>
                    </svg>
                </Row>
            </Container>
        </div>
    )
}