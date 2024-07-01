import { Row, Container } from "react-bootstrap";
import styles from "../styles.module.css";

export function Contact() {
    return (
        <Container style={{padding: "10px"}}>
            <Row className={styles.addspace}>
                <span style={{fontSize: "7em", color: "white"}}>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                >
                <path d="M21.03 6.29L12 .64 2.97 6.29C2.39 6.64 2 7.27 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.73-.39-1.36-.97-1.71M20 18H4v-8l8 5 8-5v8m-8-5L4 8l8-5 8 5-8 5z" />
                </svg>
                    <span style={{fontSize: "40px", color: "azure", padding: "15px"}}>
                        jacksonyuan256@gmail.com
                    </span>
                </span>
            </Row>
            <Row className={styles.addspace}>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="98" height="96"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
                    <span style={{fontSize: "40px", color: "azure", padding: "20px"}}>
                        https://github.com/jacksonyuan256
                    </span>
                </span>
            </Row>
            <Row className={styles.addspace}>
                <span style={{fontSize: "6em", color: "white"}}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                    >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <path d="M6 4 A2 2 0 0 1 4 6 A2 2 0 0 1 2 4 A2 2 0 0 1 6 4 z" />
                    </svg>
                    <span style={{fontSize: "40px", color: "azure", padding: "20px"}}>
                        www.linkedin.com/in/jackson-y-4755a3138
                    </span>
                </span>
            </Row>
        </Container>
    )
}



