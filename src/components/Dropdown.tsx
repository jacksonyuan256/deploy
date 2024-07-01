import { Accordion } from "react-bootstrap"

type DropdownProps = {
    headerText: string
    itemsList: string[]
    eventKey: string
}

export function Dropdown({headerText, itemsList, eventKey} : DropdownProps) {
    return (
        <Accordion.Item
            eventKey={eventKey}
                style={{
                    borderWidth: "5px",
                    borderColor: "#696969",
                    borderStyle: "solid",
                    marginBlockEnd: "20px"
                }}
        >
            <Accordion.Header>{headerText}</Accordion.Header>
            <Accordion.Body>
                <ul>
                    {itemsList.map(item => <li>{item}</li>)}
                </ul>
            </Accordion.Body>
        </Accordion.Item>
    )
}