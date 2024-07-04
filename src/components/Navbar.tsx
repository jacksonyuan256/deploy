import { Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBs className="navbar-dark shadow">
            <Container>
                <Nav className="me-auto">
                        <Nav.Link to={"/home"} as={NavLink}>
                            Home
                        </Nav.Link>
                        <Nav.Link to={"/about"} as={NavLink}>
                            About
                        </Nav.Link>
                        <Nav.Link to={"/projects"} as={NavLink}>
                            Projects
                        </Nav.Link>
                        <Nav.Link to={"/contact"} as={NavLink}>
                            Contact
                        </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}