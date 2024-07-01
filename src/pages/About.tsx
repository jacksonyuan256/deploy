import { Accordion } from "react-bootstrap"
import { Dropdown } from "../components/Dropdown"

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
            <Accordion
                style={{
                    marginTop: "10px",
                }}
            >
                <Dropdown headerText={"PROGRAMMING LANGUAGES"} itemsList={["Python", "Java", "C#", "Typescript"]} eventKey={"0"}/>
                <Dropdown headerText={"SOFTWARE TOOLS"} itemsList={["Vim", "VS Code"]} eventKey={"1"}/>
                <Dropdown headerText={"OTHERS"} itemsList={["Canva", "OBS Studio", "Lucidchart (UML Diagrams)"]} eventKey={"2"}/>

            </Accordion>
        </>
    )
}