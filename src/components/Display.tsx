import { Col, Button, Card } from "react-bootstrap";

type DisplayProps= {
    img: string
    redirectPath: string
    desc: string
    title: string
}

export function Display({img, redirectPath, desc, title} : DisplayProps) {
    const redirector = () => {
        window.location.href = redirectPath
    }

    return (
        <Col style={{marginTop: "20px"}}>
            <Card className="h-100">
                <Card.Header></Card.Header>
                <Card.Img variant="top" src={img} />
                <Card.Body d-flex d-column>
                    <Card.Title d-flex mb-4 justify-content-between align-items-baseline>
                        <span className="fs-2">{title}</span>
                    </Card.Title>
                    <Button variant="info" onClick={redirector}>Try it out!</Button>
                </Card.Body>
                <Card.Text style={{padding: "10px"}}>
                    {desc}
                </Card.Text>
                <Card.Footer></Card.Footer>
                </Card>
        </Col>
    )
}