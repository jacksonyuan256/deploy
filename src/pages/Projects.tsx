import { Row, Col, Button, Card } from "react-bootstrap";
import Img from "../img/l3.png"
import Img2 from "../img/mic.jpg"
import Img3 from "../img/hm.png"

export function Projects() {
    const redirect_game = () => {
        window.location.href = 'https://drive.google.com/file/d/1D8w9Nkhr7MZHnXktPZSJU9Yyv8zqvoOW/view?usp=sharing'
    }

    const redirect_chat = () => {
        window.location.href = 'https://github.com/jacksonyuan256/ip/releases/tag/A-Release'
    }

    const redirect_hm = () => {
        window.location.href = 'https://jacksonyuan256.github.io/website/'
    }

    return (
        <Row xs={1} md={2} lg={3}>
            <Col>
                <Card className="h-100">
                    <Card.Header></Card.Header>
                    <Card.Img src={Img} />
                    <Card.Body d-flex d-column>
                        <Card.Title d-flex mb-4 justify-content-between align-items-baseline>
                            <span className="fs-2">GAME PROJECT</span>
                        </Card.Title>
                        <Button variant="info" onClick={redirect_game}>Try it out!</Button>
                    </Card.Body>
                    <Card.Text style={{padding: "10px"}}>
                        Immerse yourself in a world full of platforming challenges!
                    </Card.Text>
                    <Card.Footer></Card.Footer>
                </Card>
            </Col>

            <Col>
                <Card className="h-100">
                    <Card.Header></Card.Header>
                    <Card.Img src={Img2} />
                    <Card.Body d-flex d-column>
                        <Card.Title d-flex mb-4 justify-content-between align-items-baseline>
                            <span className="fs-2">BASIC CHATBOT</span>
                        </Card.Title>
                        <Button variant="info" onClick={redirect_chat}>Try it out!</Button>
                    </Card.Body>
                    <Card.Text style={{padding: "10px"}}>

                    </Card.Text>
                    <Card.Footer></Card.Footer>
                </Card>
            </Col>

            <Col>
                <Card className="h-100">
                    <Card.Header></Card.Header>
                    <Card.Img src={Img3} />
                    <Card.Body d-flex d-column>
                        <Card.Title d-flex mb-4 justify-content-between align-items-baseline>
                            <span className="fs-2">HANGMAN GAME</span>
                        </Card.Title>
                        <Button variant="info" onClick={redirect_hm}>Try it out!</Button>
                    </Card.Body>
                    <Card.Text style={{padding: "10px"}}>

                    </Card.Text>
                    <Card.Footer></Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}