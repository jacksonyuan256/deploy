import { Row } from "react-bootstrap";
import Img1 from "../img/l3.png"
import Img2 from "../img/mic.jpg"
import Img3 from "../img/hm.png"
import { Display } from "../components/Display";

export function Projects() {
    return (
        <Row xs={1} md={2} lg={3}>
            <Display img={Img1} redirectPath={"https://drive.google.com/file/d/1D8w9Nkhr7MZHnXk  tPZSJU9Yyv8zqvoOW/view?usp=sharing"}
                        desc={"Immerse yourself in a world full of platforming challenges!"} title={"Game Project"}/>
            <Display img={Img2} redirectPath={"https://github.com/jacksonyuan256/ip/releases/tag/A-Release"}
                        desc={""} title={"Basic Chatbot"}/>
            <Display img={Img3} redirectPath={"https://jacksonyuan256.github.io/website"}
                        desc={""} title={"Hangman Game"}/>
        </Row>
    )
}