import { Accordion } from "react-bootstrap"

export function About() {
    return (
        <>
            <span
                style={{
                    fontSize: "2em",
                    color: "white"
                }}
            >
                TECHNICAL SKILLS
            </span>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>PROGRAMMING LANGUAGES</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C#</li>
                            <li>Typescript</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}